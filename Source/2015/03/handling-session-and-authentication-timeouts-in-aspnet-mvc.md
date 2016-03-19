Handling Session and Authentication Timeouts in ASP.NET MVC
---

The SessionExpireFilterAttribute action filter is then automatically called before each action to check if Session"UserName" is null. If it determines a timeout has not occurred, it allows the actual called action to execute. Otherwise, it forces a redirect to a timeout notification page, which in turn redirects to the logon page to allow the user to re-logon.


	[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
	public class SessionExpireFilterAttribute : ActionFilterAttribute
	{
		public override void OnActionExecuting(ActionExecutingContext filterContext)
		{
			HttpContext ctx = HttpContext.Current;

			// If the browser session or authentication session has expired...
			if (ctx.Session["UserName"] == null || !filterContext.HttpContext.Request.IsAuthenticated)
			{
				if (filterContext.HttpContext.Request.IsAjaxRequest())
				{
					// For AJAX requests, we're overriding the returned JSON result with a simple string,
					// indicating to the calling JavaScript code that a redirect should be performed.
					filterContext.Result = new JsonResult { Data = "_LogonTimeoutRedirect_" };
				}
				else
				{
					// For round-trip posts, we're forcing a redirect to Home/TimeoutRedirect/, which
					// simply displays a temporary 5 second notification that they have timed out, and
					// will, in turn, redirect to the logon page.
					filterContext.Result = new RedirectToRouteResult(
							new RouteValueDictionary {
                        { "Controller", "Home" },
                        { "Action", "TimeoutRedirect" }
                });
				}
			}
			base.OnActionExecuting(filterContext);
		}
	}


We'll create a couple of action filters to provide cross-cutting checks for timeout scenarios. The first will normally be hit when the browser session has timed out, but will also handle if the authentication has timed out first:

	[AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
	public class SessionAuthorizeAttribute : AuthorizeAttribute
	{
	    protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
	    {
	        HttpContext ctx = HttpContext.Current;
	 
	        // If the browser session has expired...
	        if (ctx.Session["UserName"] == null)
	        {
	            if (filterContext.HttpContext.Request.IsAjaxRequest())
	            {
	                // For AJAX requests, we're overriding the returned JSON result with a simple string,
	                // indicating to the calling JavaScript code that a redirect should be performed.
	                filterContext.Result = new JsonResult { Data = "_LogonTimeoutRedirect_" };
	            }
	            else
	            {
	                // For round-trip posts, we're forcing a redirect to Home/TimeoutRedirect/, which
	                // simply displays a temporary 5 second notification that they have timed out, and
	                // will, in turn, redirect to the logon page.
	                filterContext.Result = new RedirectToRouteResult(
	                    new RouteValueDictionary {
	                        { "Controller", "Home" },
	                        { "Action", "TimeoutRedirect" }
	                });
	            }
	        }
	        else if (filterContext.HttpContext.Request.IsAuthenticated)
	        {
	            // Otherwise the reason we got here was because the user didn't have access rights to the
	            // operation, and a 403 should be returned.
	            filterContext.Result = new HttpStatusCodeResult(403);
	        }
	        else
	        {
	            base.HandleUnauthorizedRequest(filterContext);
	        }
	    }
	}


The Timeout Warning Message Page

	<meta http-equiv="refresh" content="5;url=/Account/Logon/" />
	<h2>
	  Sorry, but your session has timed out. You'll be redirected to the Log On page in 5 seconds...
	</h2>

We can register global filter

	public static void RegisterGlobalFilters(GlobalFilterCollection filters)
    {
		filters.Add(new HandleErrorAttribute());
		filters.Add(new SessionExpireFilterAttribute());
		filters.Add(new SessionAuthorizationAttribute());
    }


Client-Side Calling Code Sample

	$.ajax({
	    url: "/MyController/MyAction",
	    type: 'POST',
	    dataType: 'json',
	    data: jsonData,
	    contentType: 'application/json; charset=utf-8',
	    success: function (result) {
	        if (checkTimeout(result)) {
	            // There was no timeout, so continue processing...
	        }
	    },
	    error: function (result) {
	        if (checkTimeout(result)) {
	            // There was no timeout, so continue processing...
	        }
	    }
	});


	function checkTimeout(data) {
	    var thereIsStillTime = true;
	    if (data) {
	        if (data.responseText) {
	            if ((data.responseText.indexOf("<title>Log On</title>") > -1) || (data.responseText.indexOf("<title>Object moved</title>") > -1) || (data.responseText === '"_LogonTimeoutRedirect_"')) thereIsStillTime = false;
	        } else {
	            if (data == "_Logon_") thereIsStillTime = false;
	        }
	        if (!thereIsStillTime) {
	            window.location.href = "/Home/TimeoutRedirect";
	        }
	    } else {
	        $.ajax({
	            url: "/Home/CheckTimeout/",
	            type: 'POST',
	            dataType: 'json',
	            contentType: 'application/json; charset=utf-8',
	            async: false,
	            complete: function (result) {
	                thereIsStillTime = checkTimeout(result);
	            }
	        });
	    }
	    return thereIsStillTime;
	}


In Web.config, we can control the session timeout

	<system.web>
	  <sessionState mode="InProc" timeout="1" cookieless="UseCookies" />
	</system.web>
 
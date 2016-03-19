Render dynamic model in Razor view engine and ASP.NET MVC
---

When I try to render a view whose model type is specified as: @model dynamic

by using the following code:

	@{ Html.RenderPartial("PartialView", Model.UserProfile); }

I get the following exception:

>'System.Web.Mvc.HtmlHelper<dynamic>' has no applicable method named 'RenderPartial' 
but appears to have an extension method by that name. 
Extension methods cannot be dynamically dispatched. 
Consider casting the dynamic arguments or calling the extension method without the extension method syntax.

Answer: It appears that the view where I was placing the RenderPartial code had a dynamic model, and thus, MVC couldn't choose the correct method to use. Casting the model in the RenderPartial call to the correct type fixed the issue.

	@Html.Partial("_PartialView", (ModelClass)View.UserProfile)
	@{ Html.RenderPartial("PartialView", (ModelClass)Model.UserProfile); }

When you send the anonymous type model to the view:

	return View(new {x=4, y=6});

It show that using anonymous types is not supported, however, there is a workaround, you can use an ExpandoObject, convert it to Expando

	using T1.Web.Mvc4;
	return View(new {x=4, y=6}.ToExpando());
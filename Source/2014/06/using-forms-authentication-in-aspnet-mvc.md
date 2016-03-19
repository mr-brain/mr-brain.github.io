Using Forms Authentication in ASP.NET MVC
---

In Web.config

	<configuration>
	  <system.web>
	    <authentication mode="Forms">
	      <forms defaultUrl="~/Home/Index/" loginUrl="~/Home/Login/" timeout="30" ></forms>
	    </authentication>
	    <authorization>
	      <deny users="?"></deny>
	    </authorization>
	  </system.web>
	  <location path="Scripts">
	    <system.web>
		  <authorization>
		    <allow users="*"></allow>
		  </authorization>
		</system.web>
	  </location>
	</configuration>


Create LoginViewModel.cs

	public class LoginViewModel : IValidatableObject
	{
		[DisplayFormat(ConvertEmptyStringToNull = false)]
		public string ReturnUrl { get; set; }

		[DisplayFormat(ConvertEmptyStringToNull = false)]
		[Required]
		public string UserName { get; set; }

		[DisplayFormat(ConvertEmptyStringToNull = false)]
		[Required]
		[DataType(DataType.Password)]
		[Display(Name = "Password")]
		public string Password { get; set; }

		[Display(Name = "Remember me?")]
		public bool RememberMe { get; set; }

		public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
		{
			return null;
		}
	}

Create HomeController.cs

	public class HomeController : Controller
	{
		[AllowAnonymous]
		public ActionResult Login(string ReturnUrl)
		{
			//ReturnUrl: url that is before user login
			var vm = new LoginViewModel() { ReturnUrl = ReturnUrl };
			return View(vm);
		}

		[AllowAnonymous]
		[HttpPost]
		public ActionResult Login(LoginViewModel model)
		{
			//
			if( !ModelState.IsValid )
			{
				return View(model);
			}

			//todo check login account and password
			if (false)
			{
              ...
			}

			FormsAuthentication.RedirectFromLoginPage(model.UserName, false);
			return Redirect(FormsAuthentication.GetRedirectUrl(model.UserName, false));
		}
		[AllowAnonymous]
        public ActionResult Logout()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();
            return RedirectToAction("Login", "Home");
        }


In Home/Login.cshtml

	@using (Html.BeginForm("Login", "Home", new { ReturnUrl=Model.ReturnUrl }, FormMethod.Post, new { autocomplete="off" }))
	{
	  @Html.TextBoxFor(m => m.UserName) 
	  @Html.ValidationMessageFor(m => m.UserName)
	  <br />
	  @Html.PasswordFor(m => m.Password) 
	  @Html.ValidationMessageFor(m => m.Password)
	  <br />
	  <input type="submit" value="Login" />
	}
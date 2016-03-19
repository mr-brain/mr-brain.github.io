VS.NET found the WebAPI reference error
---

I've created a MVC 4 Web API Application inside my solution, but I changed nuget package default location. So I'm getting 2 errors right now. 


>'System.Web.Http.HttpConfiguration' does not contain a definition for 'MapHttpAttributeRoutes' and no extension method 'MapHttpAttributeRoutes' accepting a first argument of type 'System.Web.Http.HttpConfiguration' could be found (are you missing a using directive or an assembly reference?)


A forced reinstall of WebAPI could do the job:

	update-package microsoft.aspnet.webapi -reinstall -project yourProject
angular tutor
---

How to load Template in Angular?

	public class HomeController : Controller
	{
		public ActionResult Template(string id)
		{
			return PartialView(string.Format("~/Views/Home/Partials/{0}.cshtml", id));
		}
	}

Then, we can use following code 

	<div ng-include="'/Home/Template/Index'"></div>


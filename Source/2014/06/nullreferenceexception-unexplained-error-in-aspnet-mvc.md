NullReferenceException unexplained error in ASP.NET MVC
---

	[NullReferenceException: Object reference not set to an instance of an object.]
	   System.Web.Mvc.<ConvertResults>d__2.MoveNext() +105
	   System.Web.Mvc.<Validate>d__1.MoveNext() +1050  System.Web.Mvc.DefaultModelBinder.OnModelUpdated(ControllerContext controllerContext, ModelBindingContext bindingContext) +404

Please check your *Validate* function code in ***xxx*Model** (inherited *IValidatableObject*). <font color='red'>You should not return null value.</font>

	public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
	{
	  return null;   // this is error code
	}


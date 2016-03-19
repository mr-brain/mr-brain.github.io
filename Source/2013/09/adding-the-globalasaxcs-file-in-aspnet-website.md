Adding the Global.asax.cs file in Asp.net WebSite
---

If we use Asp.net Web Application (File -> New-> Project-> Asp.net Web Application), we can add Global.asax as well as Global.asax.cs file.

However, if we use Asp.net Web site (File->New->Website->Asp.net Website), it is not the case. By default we will have Global.asax file only and not the Global.asax.cs file.

The structure of the Global.asax file is as under

	<%@ Application Language="C#" %>
	<script runat="server">
	void Application_Start(object sender, EventArgs e)
	{
	  // Code that runs on application startup
	}
	void Application_End(object sender, EventArgs e)
	{
	  //  Code that runs on application shutdown
	}
	void Application_Error(object sender, EventArgs e)
	{
	  // Code that runs when an unhandled error occurs
	}
	void Session_Start(object sender, EventArgs e)
	{
	  // Code that runs when a new session is started
	}
	void Session_End(object sender, EventArgs e)
	{
	}      
	</script>

So how can we add a Global.asax.cs file for a Asp.net Web site project? Let us observer the same in the below steps

Step 1: Right click App_Code -> Add New Item -> Class -> Rename it as Global.cs . Then click on the Add button.

Step 2: In the Global.cs file that got created, decorate it by inheriting the class from System.Web.HttpApplication

So the Global.asax.cs file will now look like

	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Web;
	
	public class Global : System.Web.HttpApplication
	{
	  public Global()
	  {
	    // TODO: Add constructor logic here
	  }
	
	  protected void Application_Start(object sender, EventArgs e)
	  {
	  }
	        
	  protected void Session_Start(object sender, EventArgs e)
	  {
	  }
	
	  protected void Session_End(object sender, EventArgs e)
	  {
	  }
	  
	  protected void Application_End(object sender, EventArgs e)
	  {
	  }
	}

Step 3: Now, from the Global.asax file, remove the entire script code and change the

	<%@ Application Language="C#" %>

to

	<%@ Application Language="C#" CodeBehind="~/App_Code/Global.asax.cs" Inherits="Global" %>

That's it. Now run the application and it will work
Hope this helps atleast for the newbies. Happy coding.

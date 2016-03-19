No exports were found that match the constraint contract name error
---

This morning I faced a problem while creating my Visual Studio 2012 Library Project. It said "no exports were found that match the constraint contract name"

I solved this problem by clearing Visual Studio Component Model Cache. Just delete or rename this folder:

>%AppData%\..\Local\Microsoft\VisualStudio\11.0\ComponentModelCache

Visual Studio Express 2012 has different paths. Visual Studio Express

>...\Users\{user}\AppData\Local\Microsoft\WDExpress\11.0\ComponentModelCache

With Visual Studio Express 2012 for Web

>...\Users\{user}\AppData\Local\Microsoft\VWDExpress\11.0\ComponentModelCache

When I running MyWebSite in .NET 4.0 and I can't get it working.

>HTTP error 500.22-Internal Server Error
>Detect ASP.NET setting does not apply to integrated Managed pipeline mode.

If you still need to use the HTTP Module you need to configure it (.NET 4.0 framework) as follows:

	<system.webServer>
	  <modules runAllManagedModulesForAllRequests="true">
	    <add name="MyModule" type="<<Namespace>>.<<Class>>, <<assembly>>"/>
	  </modules>
	  <validation validateIntegratedModeConfiguration="false"/>
	</system.webServer>


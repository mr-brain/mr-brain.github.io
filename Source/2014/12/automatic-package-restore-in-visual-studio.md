Automatic Package Restore in Visual Studio
---

We can add the pre-build event for each of the project that require the packages.config

	cd $(ProjectDir)
	nuget restore -source http://www.nuget.org/api/v2/ -packagesdirectory ../packages


What if you have custom package sources?
All you need to do is create a NuGet.Config file next to your .sln file, containing:

	<?xml version="1.0" encoding="utf-8"?>
	<configuration>
	  <packageSources>
	    <add key="nuget.org" value="https://www.nuget.org/api/v2/" />
	    <add key="aspnetwebstacknightlyrelease" value="https://www.myget.org/f/aspnetwebstacknightlyrelease/" />
	  </packageSources>
	</configuration>

Note that if you have private package sources that you want to keep out of your repo, you can add them to

	%APPDATA%\NuGet\Nuget.config (see this page) for details.
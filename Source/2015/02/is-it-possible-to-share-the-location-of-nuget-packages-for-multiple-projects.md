Is it possible to share the location of Nuget packages for multiple projects ?
---

Nuget version 2.1

There is now official documentation on how to control the package locations. The release notes for 2.1 specifies the following configuration in a nuget.config file.

Please modify NuGet.config file in
 
	C:\Users\MrBrain\AppData\Roaming\NuGet\NuGet.Config

and add following 

	<configuration>
	  <config>
	    <add key="repositoryPath" value="C:\thePathToMyPackagesFolder" ></add>
	  </config>
	  ... 
	</configuration>

Restart VS.NET 2013, NuGet will place packages in the new location.
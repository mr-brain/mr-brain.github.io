How to compile razor views at compile time ?
---

Razor views are dynamically compiled by the ASP.NET runtime. If you want your views to be built at compile-time you could add the following option to your .csproj file:

	<PropertyGroup Condition=" '$(Configuration)|$(Platform)' == 'Debug|AnyCPU' ">
		...
	    <MvcBuildViews>true</MvcBuildViews>
	</PropertyGroup>

	...
	<Target Name="MvcBuildViews" AfterTargets="AfterBuild" Condition="'$(MvcBuildViews)'=='true'">
    	<AspNetCompiler VirtualPath="temp" PhysicalPath="$(WebProjectOutputDir)" />
	</Target>


Unit Testing ASP.NET Web Site Project code stored in APP_Code
---

Here's a Website.targets file you can include in unit testing solution. It (re)compiles website only when App_Code changes. Just add something in **Test Project** like

	<PropertyGroup>
	    <WebsiteName>*MyWebsite*</WebsiteName>
	    <WebsitePath>..</WebsitePath>
	  </PropertyGroup>
	  <Import Project="$(ProjectDir)\Website.targets" ></Import>
	  <Target Name="BeforeBuild" DependsOnTargets="CompileWebsite">
	  </Target>

to your .csproj, customizing WebsiteName and WebsitePath and you should be ready to create **Website.targets** file in Test Project Folder:

	<?xml version="1.0" encoding="utf-8"?>
	<!--
	    Target that compiles Website's App_Code to be used for testing
	  -->
	<Project DefaultTargets="CompileWebsite" ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
	  <ItemGroup>
	    <AppCodeFiles Include="$(WebsitePath)\$(WebsiteName)\App_Code\**\*.*" ></AppCodeFiles>
	  </ItemGroup>
	  <Target Name="CompileWebsite" Inputs="@(AppCodeFiles)" Outputs="$(ProjectDir)\PrecompiledWeb\bin\App_Code.dll">
	    <AspNetCompiler VirtualPath="$(WebsiteName)" PhysicalPath="$(WebsitePath)\$(WebsiteName)" TargetPath="$(ProjectDir)\PrecompiledWeb" Force="true" Debug="true" ></AspNetCompiler>
	  </Target>
	  <Target Name="CleanWebsite">
	    <RemoveDir Directories="$(WebsitePath)\$(WebsiteName)\PrecompiledWeb" ></RemoveDir>
	  </Target>  
	</Project>
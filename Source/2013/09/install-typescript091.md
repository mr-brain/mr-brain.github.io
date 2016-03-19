Install TypeScript-0.9.1
---

Compile-on-Save With TypeScript 0.8.2, we've enabled the ability to compile a project when source files in the project are saved, circumventing the usual manual compile step.

Download TypeScript for Visual Studio 2012 and 2013 http://www.microsoft.com/en-us/download/details.aspx?id=34790

For this to work, you need to enable the global setting in Tools->Options->Text Editor->TypeScript->Project. Specifically, enable "Automatically compile TypeScript files which are part of a project".

Next, you need to make sure your Visual Studio project uses the new TypeScript targets file. You can do this in one of two ways. New projects created with the TypeScript 0.8.2 release will automatically include a link to this targets file (as will the new version of the Windows 8 sample in the samples directory). For projects made with previous versions, you will need to edit the project file by right-clicking the project, selecting "Unload Project", right-clicking the project, selecting "Edit", and updating the project XML with the following:

For each TypeScript file in your project, change the build action to 'TypeScriptCompile':

	<TypeScriptCompile Include="app.ts" />

Then additionally add (or replace if you had an older PreBuild action for TypeScript) the following at the end of your project file to include TypeScript compilation in your project.

For JavaScript projects (.jsproj):

	<Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.VisualStudio.$(WMSJSProject).targets" />
	  <PropertyGroup Condition="'$(Configuration)' == 'Debug'">
	    <TypeScriptTarget>ES5</TypeScriptTarget>
	    <TypeScriptIncludeComments>true</TypeScriptIncludeComments>
	    <TypeScriptSourceMap>true</TypeScriptSourceMap>
	  </PropertyGroup>
	  <PropertyGroup Condition="'$(Configuration)' == 'Release'">
	    <TypeScriptTarget>ES5</TypeScriptTarget>
	    <TypeScriptIncludeComments>false</TypeScriptIncludeComments>
	    <TypeScriptSourceMap>false</TypeScriptSourceMap>
	  </PropertyGroup>
	  <Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets" />

For C#-style projects (.csproj):

	 <PropertyGroup Condition="'$(Configuration)' == 'Debug'">
	    <TypeScriptTarget>ES5</TypeScriptTarget>
	    <TypeScriptIncludeComments>true</TypeScriptIncludeComments>
	    <TypeScriptSourceMap>true</TypeScriptSourceMap>
	  </PropertyGroup>
	  <PropertyGroup Condition="'$(Configuration)' == 'Release'">
	    <TypeScriptTarget>ES5</TypeScriptTarget>
	    <TypeScriptIncludeComments>false</TypeScriptIncludeComments>
	    <TypeScriptSourceMap>false</TypeScriptSourceMap>
	  </PropertyGroup>
	  <Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets" />

PS:Web Essentials 2012 is a feature of Visual Studio 2012 expansion plug For v3.0: Remove all support for the TypeScript (http://madskristensen.net/post/Web-Essentials-2013-Where-is-the-TypeScript-support.aspx) This was because many of those features were built directly in to Visual Studio 2013 and therefore no longer needed support by Web Essentials.

The repository for high quality TypeScript type definitions. https://github.com/borisyankov/DefinitelyTyped#readme

Usage: Include a line like this:

	/// <reference path="jquery.d.ts" />


how do I minify Javascript and CSS in the vs.net 2013 post-build step 
---


Want Ajax Minifier to be packaged with your project? From the Ajax Minifier install folder, you can move AjaxMin.dll and AjaxMinTask.dll directly into your source directory. I put them in my App_Data folder. Once they're somewhere in your source, in Visual Studio right-click them, select Include in Project, and also change their Build Action property to None.

Then in the code I included above, change

	<Import Project="$(MSBuildExtensionsPath)\Microsoft\Microsoft Ajax Minifier\ajaxmin.tasks" />
 to

	<UsingTask TaskName="AjaxMin" AssemblyFile="$(MSBuildProjectDirectory)\App_Data\AjaxMinTask.dll" />

 Done.


	
	<UsingTask TaskName="AjaxMin" AssemblyFile="$(MSBuildProjectDirectory)\DLL\AjaxMinTask.dll" />
	  <Target Name="AfterBuild" Condition="'$(ConfigurationName)'=='Debug'">
	    <ItemGroup>
	      <JS Include="app\**\*.js" Exclude="**\*.min.js;obj\**\*.*" />
	      <CSS Include="app\**\*.css" Exclude="**\*.min.css;obj\**\*.*" />
	    </ItemGroup>
	    <AjaxMin JsSourceFiles="@(JS)" JsSourceExtensionPattern="\.js$" JsTargetExtension="-min.js" CssSourceFiles="@(CSS)" CssSourceExtensionPattern="\.css$" CssTargetExtension="-min.css" />
	  </Target>
	  <PropertyGroup>
	    <CopyAllFilesToSingleFolderForPackageDependsOn>
			CustomCollectFiles;
			$(CopyAllFilesToSingleFolderForPackageDependsOn);
		  </CopyAllFilesToSingleFolderForPackageDependsOn>
	  </PropertyGroup>
	  <Target Name="CustomCollectFiles">
	    <ItemGroup>
	      <MinJS Include="**\*.jsMIN" />
	      <FilesForPackagingFromProject Include="%(MinJS.Identity)">
	        <DestinationRelativePath>%(RecursiveDir)%(Filename).js</DestinationRelativePath>
	      </FilesForPackagingFromProject>
	      <MinCSS Include="**\*.cssMIN" />
	      <FilesForPackagingFromProject Include="%(MinCSS.Identity)">
	        <DestinationRelativePath>%(RecursiveDir)%(Filename).css</DestinationRelativePath>
	      </FilesForPackagingFromProject>
	    </ItemGroup>
	  </Target>
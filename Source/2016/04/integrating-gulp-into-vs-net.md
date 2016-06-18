Integrating gulp into VS.NET
=== 

	$npm install -g gulp

	$npm install gulp-autoprefixer --save-dev

Create gulpfile.js file in root project path folder


**EXTENDING OUR .CSPROJ WITH CUSTOM TARGETS**

Manually edit your .csproj file and at the bottom (must be after all Import lines) we're going to add some new content.

	<PropertyGroup>
	  <CompileDependsOn>
	    $(CompileDependsOn);
	    GulpBuild;
	  </CompileDependsOn>
	</PropertyGroup>
	<Target Name="GulpBuild" DependsOnTargets="CompileTypeScript">
	  <Exec Command="npm install" />
	  <Exec Command="gulp" />
	</Target>


What about triggering a gulp cleanup script when we clean our solution in Visual Studio?  It's a very similar extension:


	<PropertyGroup>
	  <CleanDependsOn>
	    $(CleanDependsOn);
	    GulpClean
	  </CleanDependsOn>
	</PropertyGroup>
	<Target Name="GulpClean">
	  <Exec Command="gulp clean" />
	</Target>


HOOKING INTO WEB DEPLOY

	<PropertyGroup>
	  <CopyAllFilesToSingleFolderForPackageDependsOn>
	    $(CopyAllFilesToSingleFolderForPackageDependsOn);
	    CollectGulpOutput;
	  </CopyAllFilesToSingleFolderForPackageDependsOn>
	  <CopyAllFilesToSingleFolderForMsdeployDependsOn>
	    $(CopyAllFilesToSingleFolderForMsdeployDependsOn);
	    CollectGulpOutput;
	  </CopyAllFilesToSingleFolderForMsdeployDependsOn>
	</PropertyGroup>
	<Target Name="CollectGulpOutput">
	  <ItemGroup>
	    <_CustomFiles Include="build\**\*" />
	    <FilesForPackagingFromProject Include="%(_CustomFiles.Identity)">
	      <DestinationRelativePath>build\%(RecursiveDir)%(Filename)%(Extension)</DestinationRelativePath>
	    </FilesForPackagingFromProject>
	  </ItemGroup>
	  <Message Text="CollectGulpOutput list: %(_CustomFiles.Identity)" />
	</Target>
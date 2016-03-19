How to compile many typescript files in VS.NET 2013?
---

We can add following MSBuild script in your csproj file.

	<Import Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets"
	    Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\$(TypeScriptToolsVersion)\Microsoft.TypeScript.targets')" />
	<Target Name="CombineT1" BeforeTargets="PrepareForBuild">
	  <ItemGroup>
	    <T1TypeScriptFiles Include="$(projectDir)Scripts\t1\*.ts;" Exclude="$(projectDir)\Scripts\**\*.d.ts;" />
	  </ItemGroup>
	  <WriteLinesToFile File="$(projectDir)Scripts\t1\typescriptcompiler.input" Lines="@(T1TypeScriptFiles)" Overwrite="true" Encoding="UTF-8" />
	  <Exec Command="&quot;$(MSBuildProgramFiles32)\Microsoft SDKs\TypeScript\$(TypeScriptToolsVersion)\tsc&quot; --out $(projectDir)Scripts\t1\t1.js --target ES5 @$(projectDir)Scripts\t1\typescriptcompiler.input" CustomErrorRegularExpression="\.ts\([0-9]+,[0-9]+\):(.*)">
	  </Exec>
	</Target>


How to encode space path in MSBuild?
---

I'm using the property MSBuildProjectDirectory with MSBuild.
The project is located in:

	C:\Program Files (x86)\Jenkins\workspace\MyProject


and MSBuild will get a "The system cannot find the file specified" error.

please instead of

	$([MSBuild]::Unescape('$(MSBuildProjectDirectory)'))
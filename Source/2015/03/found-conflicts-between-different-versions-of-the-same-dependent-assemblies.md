Found conflicts between different versions of the same dependent assemblies
---

>Found conflicts between different versions of the same dependent assembly. Please set the "AutoGenerateBindingRedirects" property to true in the project file. For more information, see http://go.microsoft.com/fwlink/?LinkId=294190.

Considering there are about 50 references across the projects I have in this solution, that isn't particularly helpful. 

There is an easy way to get the compiler to spit out more information.

1. In Visual Studio 2013 go to Tools > Options.
2. Select Project and Solutions > Build and Run.
3. Find the drop down MSBuild project build output verbosity. Here you can configure MSBuild to give you more information. By default it will be set to "Minimal". Change this to "Detailed'.
4. Rebuild and view the Output window. Copy everything into notepad and search for the **warning** which should tell you which assemblies you need to look at.
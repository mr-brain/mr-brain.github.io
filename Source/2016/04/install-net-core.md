Install .NET Core 1.0
---

The best way to install .NET Core on Windows is to download the [official MSI installer](https://dotnetcli.blob.core.windows.net/dotnet/beta/Installers/1.0.0.001598/dotnet-win-x64.1.0.0.001598.exe). This installer will install the tools and put them on your PATH.

If you are using Windows 7, Windows Server 2008 or Windows Server 2012 you will also need to install Visual C++ Redistributable for [Visual Studio 2012 Update 4](https://www.microsoft.com/en-us/download/confirmation.aspx?id=30679) & [Visual C++ Redistributable for Visual Studio 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48145) .


Initialize some code for console application

	C:\>mkdir hwapp
	C:\>cd hwapp
	C:\>dotnet new

The first command will restore the packages specified in the project.json file, and the second command will run the actual sample:

	C:\>dotnet restore
	C:\>dotnet run

update npm

	npm install -g npm

Initialize yo

	npm install -g yo
	npm install -g generator-webapp
	npm install -g generator-aspnet


To scaffold a new aspnet project, run:

	yo aspnet

![yo-aspnet](install-net-core\yo-aspnet.png)


Now lets create using Visual Studio yo extension, [install yo extension first](https://marketplace.visualstudio.com/items?itemName=samverschueren.yo).


Intellisense Key Bindings for Visual Studio Code

|
|Key	|Command	|Command id
|Ctrl+Space	|Trigger Suggest	|editor.action.triggerSuggest


Add Static Files packages and restore "project.json"

	"dependencies": {
		...,
		"Microsoft.AspNet.StaticFiles": "1.0.0-rc1-final"
	}

From the Command Palette in VS Code

	dotnet restore


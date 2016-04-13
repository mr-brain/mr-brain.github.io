Install ASP.NET 5 (.NET Core 1)
---

Install [ASP.NET 5](https://go.microsoft.com/fwlink/?LinkId=627627)

Enable the ASP.NET 5 command-line tools. Open a command-prompt and run:

	dnvm upgrade

This will make the default .NET Execution Environment (DNX) active on the path.

On Windows 7 and Windows Server 2008 R2 you will also need to install the [Visual C++ Redistributable for Visual Studio 2012 Update 4.](https://www.microsoft.com/en-us/download/confirmation.aspx?id=30679)


	@powershell -NoProfile -ExecutionPolicy unrestricted -Command "&{$Branch='dev';iex ((new-object net.webclient).DownloadString('https://raw.githubusercontent.com/aspnet/Home/dev/dnvminstall.ps1'))}"


Once this step is complete you should be able to run dnvm and see some help text.



Use DNVM to install DNX for .NET Core:

	dnvm upgrade -r coreclr

Use DNVM to install DNX for the full .NET Framework:

	dnvm upgrade -r clr


Install the requested DNX version from the feed, create console application using .NET Core

	dnvm install -a x64 -r coreclr 1.0.0-rc1-final



Install generator 

	npm install -g yo generator-aspnet

Create Develop folder and generate console project

	yo aspnet


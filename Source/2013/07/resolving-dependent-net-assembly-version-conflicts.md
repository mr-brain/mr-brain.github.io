Resolving Dependent .NET Assembly Version Conflicts
---

I ran into an interesting error message this morning while run application.

>------ Build started: Project: UnitTests, Configuration: Debug Any CPU ------
>Consider app.config remapping of assembly "yourAssembly, Culture=neutral, PublicKeyToken=xxx" 
from Version "2.2.0.0" [] to Version "2.2.8.0" 
[C:\Demo\yourAssembly.dll] to solve conflict and get rid of warning.
C:\WINDOWS\Microsoft.NET\Framework\v2.0.50727\Microsoft.Common.targets : 
warning MSB3247: Found conflicts between different versions of the same dependent assembly.

This occurs because YourApp depends on a different version of the your Assembly.

Fortunately, the error message gives you all you need to know to fix the problem. I added an App.config file to the project with the following XML.

	<?xml version="1.0"?>
	<configuration>
	  <runtime>
	    <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
	      <dependentAssembly>
	        <assemblyIdentity name="myAssembly" publicKeyToken="96D09A1EB7F44A77" culture="neutral"/>
	        <bindingRedirect oldVersion="0.0.0.0-2.2.8.0" newVersion="2.2.8.0"/>
	      </dependentAssembly>
	    </assemblyBinding>
	  </runtime>
	</configuration> 

How to find public key token for a .NET DLL or assembly?

Use the following command,

>sn -T myDLL.dll

This will give you the public key token. Remember one thing this only works if the assembly has to be strongly signed.

Example

	C:\WINNT\Microsoft.NET\Framework\v3.5>sn -T myDll.dll
	Microsoft (R) .NET Framework Strong Name Utility  Version 3.5.21022.8
	Copyright (c) Microsoft Corporation.  All rights reserved.

	Public key token is x77x5x561934x089


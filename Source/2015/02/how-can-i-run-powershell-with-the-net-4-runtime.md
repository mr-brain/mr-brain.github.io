How can I run PowerShell with the .NET 4 runtime?
---

Enabling Execution of PowerShell PS1 Scripts

	Set-ExecutionPolicy Unrestricted

You can see exactly what versions Powershell is using by examining the value of *$PSVersionTable*

![PSVersionTable2](https://dl.dropboxusercontent.com/u/13003046/images/PSVersionTable2.png)

Notice the value or CLRVersion begins with a "2".

Being lazy, of course, we hate manual steps, so here is a small PowerShell script that will automatically create and place the necessary files. Be aware that the script as shown below will overwrite existing .config files.

	$config_text = @"
	<?xml version="1.0"?> 
	<configuration> 
	    <startup useLegacyV2RuntimeActivationPolicy="true"> 
	        <supportedRuntime version="v4.0.30319"/> 
	        <supportedRuntime version="v2.0.50727"/> 
	    </startup> 
	</configuration>
	"@
	
	$config_text| Out-File $pshome\powershell.exe.config
	$config_text| Out-File $pshome\powershell_ise.exe.config

Start PowerShell as an Administrator an then run the script.

Now restart PowerShell and examine the value of $PSVersionTable.


![PSVersionTable4](https://dl.dropboxusercontent.com/u/13003046/images/PSVersionTable4.png)

And now your .NET 4.0 module will load correctly.

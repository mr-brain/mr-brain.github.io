Why can't I get the Jenkins Powershell plugin to work?
---

PowerShell says “execution of scripts is disabled on this system.”

Jenkins powershell plugin is running 32 bit Powershell

	64-bit:  C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
	32-bit:  C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe

you can run following

	> C:\Windows\SysWOW64\WindowsPowerShell\v1.0\powershell.exe
	PS C:\hoge > Set-ExecutionPolicy RemoteSigned
	PS C:\hoge > exit

	> C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe
	PS C:\hoge > Set-ExecutionPolicy RemoteSigned
	PS C:\hoge > exit

Or you can

	set-executionpolicy -executionpolicy unrestricted
	set-executionpolicy -executionpolicy -Scope LocalMachine unrestricted
	get-executionpolicy -list


Other Information

	powershell.exe -executionpolicy unrestricted -command .\test.ps1



Microsoft FastCGI Error 0x80070585
---

If you run FastCGI and show following error:


	FastCGI Error
	The FastCGI Handler was unable to process the request.
	--------------------------------------------------------------------------------
	Error Details:
	Could not find entry for "php" on site 2043809562 in [Types] section. 
	Error Number: 1413 (0x80070585). 
	HTTP Error 500 - Server Error.
	Internet Information Services (IIS)


You can modify C:\WINDOWS\system32\inetsrv\fcgiext.ini file:

	[Types]
	php=PHP
	
	[PHP]
	ExePath=C:\Devp\PHP\php-cgi.exe
	InstanceMaxRequests=10000
	ActivityTimeout=300
	RequestTimeout=300
	EnvironmentVars=PHP_FCGI_MAX_REQUESTS:10000,PHPRC:C:\Devp\PHP\
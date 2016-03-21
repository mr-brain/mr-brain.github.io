When debug a Typescript application in Google Chrome, the *.ts files are appear totally empty ?
---

You try to add following to your web.config

	<system.webServer>
	  ...
	  <staticContent>
	    <remove fileExtension=".tsx" />
	    <mimeMap fileExtension=".tsx" mimeType="application/javascript" />
	  </staticContent>
	</system.webServer>


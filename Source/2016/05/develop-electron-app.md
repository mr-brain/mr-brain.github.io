Develop Electron App
===

* Download node.js v4.4.5 LTS msi version from [nodejs.org website](https://nodejs.org/en/download/)
* Download python 2.7.1 from [python.org website](https://www.python.org/downloads/windows/)

	set system environment path PYTHON="C:\Python27\python.exe"
	

* Install [Visual Studio Community 2015](https://www.visualstudio.com/zh-tw/products/visual-studio-community-vs.aspx)
	
	Visual C++ -> 
		Visual C++ 2015
	Common Windows Application Develop Tool -> 
		Tool (1.2) & Windows 10 SDK (10.0.10586)
		Windows 10 SDK (10.0.10586)

Enter cmd.exe

	$npm config set msvs_version 2015 --global
	
	The above can avoid the following parameters for each installation
	npm install [package name] --msvs_version=2015

	$npm install electron-prebuilt --save
	

Each development new Electron App, first create folder C:\sample-app1, and cmd c:\sample-app1

	sample-app1/
		├── package.json
		├── main.js
		├── webpack.config.js
		└── app/
			├── mainWindow.html
			└── mainWindow.jsx

* Create package.json file

	{
		"name": "electron-example",
		"version": "0.1.0",
		"main": "main.js"
	}
	
PS：If package.json Not specified main field，Electron default use index.js file.

main.js 
	'use strict';

	const electron = require('electron');
	// app: Control application lifecycle module
	const app = electron.app;

	// BrowserWindow: Create a native window module
	const BrowserWindow = electron.BrowserWindow;

	// Reserve a global object to avoid JavaScript object GC resulting window automatically closes
	let mainWindow;

	function createWindow () {
		// Create browser window
		mainWindow = new BrowserWindow({width: 800, height: 600});

		// Load mainWindow.html for view
		mainWindow.loadURL('file://' + __dirname + '/app/mainWindow.html');

		// Open Developer Tools
		mainWindow.webContents.openDevTools();

		// When browser window closed，will send 'closed' signal，and run callback
		mainWindow.on('closed', function() {
			mainWindow = null;
		});
	}

	// When Electron initialization is completed and begin establish the new window，
	// will send 'ready' signal，and run callback
	app.on('ready', createWindow);

	// app quit
	app.on('window-all-closed', function () {
		// For OSX User platform, force user press Cmd + Q
		if (process.platform !== 'darwin') {
			app.quit();
		}
	});

	app.on('activate', function () {
		// For OSX
		if (mainWindow === null) {
			createWindow();
		}
	});
	
app/mainWindow.html is show window view

	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="UTF-8">
		<title>My Electron-React app</title>
	</head>
	<body>
		<div id="content">
			Hello World!!
		</div>
	</body>
	</html>

In sample-app1 Folder, install package 	

	$npm install electron-prebuilt


Run
	
	$ node_modules/.bin/electron .

	Second parameter is: package.json Folder path 
	
	
	
---


	
	
Run webpack to generate new app/built/mainWindow.js file

	$ ./node_modules/.bin/webpack
	
	
Start Run
	
	$ node_modules\.bin\electron .


In order to facilitate future easy to use，we will put instructions into package.json , 

	"scripts": {
		"start": "./node_modules/.bin/electron ./",
		"electron-rebuild": "./node_modules/.bin/electron-rebuild",
		"webpack": "./node_modules/.bin/webpack"
	}

After only need to run

	$ npm run webpack && npm start
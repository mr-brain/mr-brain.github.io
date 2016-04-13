create electron develop environment
---

install [node.js](https://nodejs.org/en/download/)
install [python 2.x]()


	npm config set msvs_version 2015 --global

It must avoid each installation, for example:

	npm install [package name] --msvs_version=2015

install electron-prebuilt 
 
	npm install electron-prebuilt --save


our application file system：

	your-app/
		├── package.json
		├── app.js
		├── webpack.config.js
		└── app/
        	├── main.html
	        └── main.jsx

run sample

	./node_modules/.bin/electron .


you can pack your application

	npm i electron-packager

modify package.json file

	"scripts": {
	    "start": "electron .",
	    "build": "electron-packager . MyFirstApp --ignore=node_modules/electron-* --platform=win32 --arch=x64 --version=0.32.3"
	}

and run

	npm run build

and use asar 

	npm i asar

modify package.json file

	"scripts": {
	    "start": "electron .",
	    "build": "electron-packager . MyFirstApp --ignore=node_modules/electron-* --platform=win32 --arch=x64 --version=0.32.3",
	    "package": "asar pack MyFirstApp-win32-x64/resources/app MyFirstApp-win32-x64/resources/app.asar && rm -rf MyFirstApp-win32-x64/resources/app"
	}

run package

	npm run package


install webpack

	npm install webpack --save
	npm insall webpack-target-electron-renderer --save


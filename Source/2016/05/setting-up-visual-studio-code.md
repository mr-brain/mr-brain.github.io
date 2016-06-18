## Setting up a TypeScript + Visual Studio Code development environment

* Download and installing Visual Studio Code
* Download node.js

Open VS Code when you are ready and use Shift + Command + p to access the command panel.
Go ahead and type "install extensions": and type

	tslint
	
go to node.js cmd

	npm install -g tslint
	
install VS code extensions

	Wallaby.js
	
---

Create a new folder for your project and create a new package.json file:

$ mkdir ts-vscode-boilerplate
$ cd ts-vscode-boilerplate
$ npm init

We are now ready to install the third party dependencies:

	npm install  --save-dev browser-sync
	npm install  --save-dev browserify
	npm install  --save-dev chai
	npm install  --save-dev gulp
	npm install  --save-dev gulp-istanbul
	npm install  --save-dev gulp-mocha
	npm install  --save-dev gulp-sourcemaps
	npm install  --save-dev gulp-tslint
	npm install  --save-dev gulp-typescript
	npm install  --save-dev gulp-uglify
	npm install  --save-dev run-sequence
	npm install  --save-dev tslint
	npm install  --save-dev typescript
	npm install  --save-dev vinyl-buffer
	npm install  --save-dev vinyl-source-stream
	
Configuring your VS Code preferences
Click on 「Workspace Settings」. Two files should be displayed on screen:

 

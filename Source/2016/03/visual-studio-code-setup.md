Setting up TypeScript + Visual Studio Code development environment
---


Let's get started!

* Download and installing [Visual Studio Code](https://code.visualstudio.com/)
* Download and installing [node.js 4.4.1](https://nodejs.org/en/download/)

Let's now install some VS code extensions.
Open VS Code when you are ready and use Shift + Ctrl + p
to access command panel.

type "install extensions"

![install-extensions](visual-studio-code-setup/install-extensions.png)

	ext install tslin


Note The tslint extension requires a global installation of tslint:

	npm install -g tslint


then restart VS Code

	ext install Wallaby.js


	>mkdir ts-vscode-boilerplate
	>cd ts-vscode-boilerplate
	>npm init

We are now ready to install the third party dependencies:

	$ npm install  --save-dev browser-sync
	$ npm install  --save-dev browserify
	$ npm install  --save-dev chai
	$ npm install  --save-dev gulp
	$ npm install  --save-dev gulp-istanbul
	$ npm install  --save-dev gulp-mocha
	$ npm install  --save-dev gulp-sourcemaps
	$ npm install  --save-dev gulp-tslint
	$ npm install  --save-dev gulp-typescript
	$ npm install  --save-dev gulp-uglify
	$ npm install  --save-dev run-sequence
	$ npm install  --save-dev tslint
	$ npm install  --save-dev typescript
	$ npm install  --save-dev vinyl-buffer
	$ npm install  --save-dev vinyl-source-stream


Open VS Code and Click preferences -> “Workspace Settings”. 


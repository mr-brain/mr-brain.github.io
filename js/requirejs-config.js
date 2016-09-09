var require = {
	//urlArgs: "bust=v20151207",
	baseUrl: '/Scripts',
	paths: {
		"jquery": "jquery-2.1.4.min",
		"jquery-mobile": "jquery.mobile-1.4.5/jquery.mobile-1.4.5",
		//"react": "react-0_13_3/react",
		"react": "react-0.14.3",
		//"react-with-addons": "react-0_13_3/react-with-addons",
		"react-with-addons": "react-with-addons-0.14.0",
		"react-dom": "react-dom-0.14.3",
		//"react-router": "ReactRouter-1.0",	//https://unpkg.com/
		"react-router": "ReactRouter-2.0",	//https://unpkg.com/
		"reflux": "refluxjs-0_3_0/dist/reflux",
		"require": "require-2.1.20-min",
		"react-redux": "react-redux-4_0_0/dist/react-redux",
		"redux": "redux-3_0_4/dist/redux",
		"lodash": "lodash",
		"flux": "flux-2_1_1/dist/Flux",
		"typescript": "/Scripts/typescript/typescript",
		"TypescriptCompilerApi": "/js/common/TypescriptCompilerApi",
		"Exporter": "t1/deps/Exporter",
		"t1": "/Scripts/t1/dist/T1-bundle-0.1",
		"velocity": "velocity-1.2.3",
		//"Velocity-React": "/Scripts/velocity-react-1.1.1/velocity-component",
		"VelocityComponent": "/js/Samples/VelocityComponent",
		"Store": "/js/Samples/RefluxDemo5/Store",
		"Actions": "/js/Samples/RefluxDemo5/Actions",
	},
	shim: {
		'jquery': {
			exports: '$'
		},
		'reflux': {
			deps: [ 'react', 'flux' ],
			exports: 'Reflux'
		},
		'flux': {
			deps: ['react'],
			exports: 'Flux'
		},
		't1': {
			deps: ['jquery', 'reflux', 'Exporter'],
			exports: 't1'
		},
		'velocity': {
			exports: 'Velocity'
		},
	}
};


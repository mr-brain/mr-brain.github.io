React + FReflux
---

### React Flow

![React Flow](/images/Flux.png)


#### Create Actions


	import $ = require('jquery');
	import t1 = require('t1');
	import FReflux = t1.FReflux;
	import FRefluxActions = t1.FRefluxActions;

	enum Demo1ActionType {
		Request
	}
	
	export class Demo1Actions extends FRefluxActions<Demo1ActionType> {
		constructor() {
			super(Demo1ActionType);
		}
	
		Request(name: string) {
			this.dispatchEvent(Demo1ActionType.Request, name);
		}
	}


#### Create Store

	import t1 = require('t1');
	import FReflux = t1.FReflux;
	import FRefluxStore = t1.FRefluxStore;

	export class Demo1State {
		name: string;
	}
	
	
	export class Demo1Store extends FRefluxStore<Demo1State> {
		_state: Demo1State = new Demo1State();
	
		constructor(actions: FRefluxActions<any>[]) {
			super(actions);
		}
	
		getState(): Demo1State {
			return this._state;
		}
	}

#### Create Main View

	export interface MobileDemo1Props extends React.Props<MobileDemo1> {
		history: any;
	}
	
	export class MobileDemo1 extends FRefluxStoreComponent<MobileDemo1Props, Demo1State> {
		constructor() {
			this.name = "MobileDemo1";
			super(_app1Store);
		}
	
		componentWillMount() {
		}
	
		componentWillUnmount() {
		}
	
		componentDidMount() {
			super.componentDidMount();
		}
	
		navigate() {
			console.log(this.props);
			this.props.history.pushState(null, "/");
			//this.props.history.replaceState(null, "/");
		}
	
		render() {
			return (
				<div>React-Router Demo1
					<Link to='Panel1'>Panel1</Link>
					<Link to='Panel2'><button className="btn btn-success">Panel2</button></Link>
					<button onClick={this.navigate.bind(this)}>TEST</button>
					{this.props.children}
				</div>
			);
		}
	}


#### Create Panel1 View
	
	interface Panel1Props extends React.Props<Panel1> {
	}
	
	
	class Panel1 extends FRefluxReducerComponent<Panel1Props, Demo1State> {
		constructor() {
			super();
		}
	
		getStateFromStore(state: Demo1State): Demo1State {
			return state;
		}
	
		render() {
			return (
				<div>
					Hello Panel-1
				</div>
			);
		}
	}


### Render

	import * as Router from 'react-router';
	import { Route, IndexRoute, Link } from 'react-router';

	var routeMap = (
			<Route path="/" component={MobileDemo1}>
					<IndexRoute component={Panel1}/>
					<Route path="Panel1" component={Panel1}/>
	        <Route path="Panel2" component={Panel2}/>
	        <Route path="*" component={NotFoundPage} />
	    </Route>
	);

	ReactDOM.render(
		<Router.Router history={Router.browserHistory}>
			{routeMap}
		</Router.Router>, 
		document.getElementById('app1')
	);

### Main.js

	(function(){
		var baseUrl = "/js/Samples/ReactRouterDemo1/";
	
		require.config({
			paths: {
				"App": baseUrl + "App",
			}
		});
	})();
	
	define(["require", "exports", 'App'], function (require, exports, app) {
	});


### HTML

	<html>
	<head>
		<meta name="viewport" content="width=device-width" />
		<title>React Router Demo1</title>
		<script src="~/js/requirejs-config.js"></script>
		<script src="~/Scripts/require.js" data-main="/js/Samples/ReactRouterDemo1/Main.js"></script>
	</head>
	<body>
		<div id="app1">
		</div>
	</body>
	</html>
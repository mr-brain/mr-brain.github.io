//declare class Reflux {
//	public static createActions(names: Array<string>);
//	public static function createAction(obj: any);
//	public static createStore(obj: any);
//	public static ActionMethods: any;
//}

//interface IStore {
//	trigger(...args);
//}

//declare module Reflux {
//	function createActions(obj :any): any;
//	function createAction(obj: any);
//	function createStore(obj: any): IStore;
//	var ActionMethods: any;
//}

//declare module RefluxCore {
//}

declare module 'react-with-addons' {
	export namespace addons {
		function createFragment(data: any);
	}
}

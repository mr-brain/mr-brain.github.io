// http://getclank.com/demos/table-view.html
import Reflux = require('reflux');
import React = require('react');
import t1 = require('t1');
import $ = require('jquery');

import FReflux = t1.FReflux;
import FRefluxActions = t1.FRefluxActions;
import FRefluxStore = t1.FRefluxStore;
import FRefluxStoreComponent = t1.FRefluxStoreComponent;
import FRefluxReducerComponent = t1.FRefluxReducerComponent;
//-----------------------------------------------------------------------------
import Store = require("Store");
import Actions = require("Actions");
import SearchState = Store.SearchState;

var _appActions = Actions._appActions;

export interface SearchBoxProps extends React.Props<SearchBox> {
}

export class SearchBox extends FRefluxStoreComponent<SearchBoxProps, SearchState> {

	constructor() {
		super(Store._appStore);
		this._store.listen("change", this.onChange.bind(this));
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

	componentDidMount() {
	}

	onChange() {
		this.forceUpdate();
	}

	handleOnSearchClick(event) {
		var state = this.getStateFromStore();
		state.searchStatus = "searching";
		_appActions.Search(state.searchText);
		//this.setState(state);
	}

	handleOnSearchChange(event) {
		var value = event.target.value;
		var state = this.getStateFromStore();
		state.searchText = value;
		//this.setState(state);
	}

	render() {
		console.log("SearchBox");

		var self = this;
		var state = this.getStateFromStore();

		var searchResult = [];
		if (state.foundResult != null) {
			state.foundResult.forEach((item) => {
				var relLink = item.relFilename.replace("\\", "/");
				var idx = relLink.lastIndexOf(".");
				relLink = "/Blog/" + relLink.substr(0, idx) + ".html";

				var html = (
					<div className="input-group">
						<span>
							<a href={relLink}> {item.title}</a>
						</span>
					</div>
				);
				searchResult.push(html);
			});
		}

		return (
			<div>
				<h4>Blog Search</h4>
				<div className="input-group">
					<input type="text" className="form-control" onChange={this.handleOnSearchChange.bind(this)} />
					<span className="input-group-btn">
						<button className="btn btn-default" type="button" onClick={this.handleOnSearchClick.bind(this)}>
							<span className="glyphicon glyphicon-search"></span>
							</button>
						</span>
					</div>
				<div className="input-group">
					<span>{state.searchStatus}</span>
				</div>
				{searchResult}
			</div>
		);
	}
}

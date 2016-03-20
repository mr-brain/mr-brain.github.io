import Reflux = require('reflux');
import React = require('react');
import t1 = require('t1');

import FReflux = t1.FReflux;
import FRefluxActions = t1.FRefluxActions;
import FRefluxStore = t1.FRefluxStore;
import FRefluxStoreComponent = t1.FRefluxStoreComponent;
//-----------------------------------------------------------------------------
import Actions = require("Actions");

import taffy = require("taffy");
taffy.none = null;

export class FoundItem {
	title: string;
	createTime: string;
	relFilename: string;
}

export class SearchState {
	searchStatus: string;
	searchText: string;
	foundResult: FoundItem[];
}

export class SearchStore extends FRefluxStore<SearchState> {
	_state: SearchState = new SearchState();
	_db: any;

	constructor(actions: FRefluxActions<any>[]) {
		super(actions);
		this.init();
	}

	init() {
		var self = this;
		$.getJSON("/Blog/BlogData.json", function (data) {
			self._db = TAFFY(data);
			console.log("Database OK");
		});
	}

	getState(): SearchState {
		return this._state;
	}

	onSearch(text: string) {
		var state = this._state;
		var items = this._db({ Title: { like: text } });
		if (items.count() == 0) {
			state.foundResult = null;
			state.searchStatus = "Not found";
		} else {
			state.searchStatus = null;
			state.foundResult = new Array();
			items.each(function (data) {
				var item = new FoundItem();
				item.title = data.Title;
				item.relFilename = data.RelFilename;
				item.createTime = data.CreateTime;
				state.foundResult.push(item);
			});
		}
		console.log(state.foundResult);
		this.trigger(this._state);
	}
}

export var _appStore = new SearchStore([Actions._appActions]);
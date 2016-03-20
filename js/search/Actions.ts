import Reflux = require('reflux');
import React = require('react');
import t1 = require('t1');

import FReflux = t1.FReflux;
import FRefluxActions = t1.FRefluxActions;
import FRefluxStore = t1.FRefluxStore;
import FRefluxStoreComponent = t1.FRefluxStoreComponent;

enum SearchActionType {
	Search
}

export class SearchActions extends FRefluxActions<SearchActionType> {
	constructor() {
		super(SearchActionType);
	}

	Search(text: string) {
		this.dispatchEvent(SearchActionType.Search, text);
	}
}

export var _appActions = new SearchActions();
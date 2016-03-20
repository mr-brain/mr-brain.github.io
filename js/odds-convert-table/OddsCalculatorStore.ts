import Reflux = require('reflux');
import React = require('react');
import t1 = require('t1');

import FReflux = t1.FReflux;
import FRefluxActions = t1.FRefluxActions;
import FRefluxStore = t1.FRefluxStore;
import FRefluxStoreComponent = t1.FRefluxStoreComponent;
//-----------------------------------------------------------------------------
import Actions = require("Actions");

export class OddsCalculateState {
}

export class OddsCalculatorStore extends FRefluxStore<OddsCalculateState> {
	_state: OddsCalculateState = new OddsCalculateState();

	constructor(actions: FRefluxActions<any>[]) {
		super(actions);
	}

	getState(): OddsCalculateState {
		return this._state;
	}

	onRequest(name: string) {
		this.trigger(this._state);
	}
}

export var _appStore = new OddsCalculatorStore([Actions._appActions]);
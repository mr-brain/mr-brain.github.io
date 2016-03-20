import Reflux = require('reflux');
import React = require('react');
import t1 = require('t1');

import FReflux = t1.FReflux;
import FRefluxActions = t1.FRefluxActions;
import FRefluxStore = t1.FRefluxStore;
import FRefluxStoreComponent = t1.FRefluxStoreComponent;

enum OddsActionType {
	Calculate
}

enum OddsType{
	Manila,
	HK,
	Euro,
	Indo
}

export class OddsActions extends FRefluxActions<OddsActionType> {
	constructor() {
		super(OddsActionType);
	}

	Calculate(oddsType: OddsType, odds: number) {
		this.dispatchEvent(OddsActionType.Calculate, oddsType, odds);
	}
}

export var _appActions = new OddsActions();
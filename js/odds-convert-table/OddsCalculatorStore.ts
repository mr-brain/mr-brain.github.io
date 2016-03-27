import Reflux = require('reflux');
import React = require('react');
import t1 = require('t1');

import FReflux = t1.FReflux;
import FRefluxActions = t1.FRefluxActions;
import FRefluxStore = t1.FRefluxStore;
import FRefluxStoreComponent = t1.FRefluxStoreComponent;
//-----------------------------------------------------------------------------
import Actions = require("Actions");
import OddsType = Actions.OddsType;

export class OddsCalculateState {
	malayOdds: string;
	hkOdds: string;
	euroOdds: string;  
	indoOdds: string;
}

export class OddsConverter {
	malayTo(odds: number): number {
		throw new Error("Not implement");
	}
	toMalay(odds: number): number {
		throw new Error("Not implement");
	}
}

export class MalayOddsConvert extends OddsConverter {
	malayTo(odds: number): number {
		return odds;
	}
	toMalay(odds: number): number {
		return odds;
	}
}

export class HkOddsConvert extends OddsConverter {
	malayTo(odds: number): number {
		if (odds > 0) {
			return odds;
		}
		return (-1 / odds);
	}
	toMalay(odds: number): number {
		return (-1 / odds);
	}
}

export class EuroOddsConvert extends OddsConverter {
	malayTo(odds: number): number {
		if (odds > 0) {
			return odds + 1;
		}
		return (-1 / odds) + 1;
	}
	toMalay(odds: number): number {
		if (odds < 0) {
			return -1 / (odds - 1);
		}
		return odds - 1;
	}
}

export class IndoOddsConvert extends OddsConverter {
	malayTo(odds: number): number {
		return (-1 / odds);
	}
	toMalay(odds: number): number {
		return -1 / odds;
	}
}

export class OddsCalculatorStore extends FRefluxStore<OddsCalculateState> {
	_state: OddsCalculateState = new OddsCalculateState();


	_oddsTable: OddsConverter[];


	constructor(actions: FRefluxActions<any>[]) {
		super(actions);
		var table = this._oddsTable = [];
		table[OddsType.Malay] = new MalayOddsConvert();
		table[OddsType.Hk] = new HkOddsConvert();
		table[OddsType.Euro] = new EuroOddsConvert();
		table[OddsType.Indo] = new IndoOddsConvert();
	}

	getState(): OddsCalculateState {
		return this._state;
	}

	onCalculate(oddsType: OddsType, odds: number) {

		this._state.malayOdds = this.calculateOdds(oddsType, odds, OddsType.Malay);
		this._state.hkOdds = this.calculateOdds(oddsType, odds, OddsType.Hk);
		this._state.euroOdds = this.calculateOdds(oddsType, odds, OddsType.Euro);
		this._state.indoOdds = this.calculateOdds(oddsType, odds, OddsType.Indo);

		this.trigger(this._state);
	}

	calculateOdds(fromOddsType: OddsType, odds: number, toOddsType: OddsType) : string {
		var fromConverter = this._oddsTable[fromOddsType];
		var toConverter = this._oddsTable[toOddsType];
		var malayOdds = fromConverter.toMalay(odds);
		var newOdds = toConverter.malayTo(malayOdds);
		return newOdds.toString();
	}
}

export var _appStore = new OddsCalculatorStore([Actions._appActions]);
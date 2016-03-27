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
import Store = require("OddsCalculatorStore");
import Actions = require("Actions");
import OddsConvertorState = Store.OddsCalculateState;

import OddsType = Actions.OddsType;

var _actions = Actions._appActions;

export interface OddsConvertTableProps extends React.Props<OddsConvertTable> {
}

export class OddsConvertTable extends FRefluxStoreComponent<OddsConvertTableProps, OddsConvertorState> {

	constructor() {
		this.name = "MobileDemo1";
		super(Store._appStore);
	}

	componentWillMount() {
	}

	componentWillUnmount() {
	}

	componentDidMount() {
		super.componentDidMount();
		var dom: any = this.refs["manilaOdds"];
		//dom.getDOMNode().setAttribute('autocomplete', 'off');
		dom.setAttribute('autocomplete', 'off');
	}

	handleOnClickCalculate(oddsType: OddsType, evt) {
		var value = this.getOdds(oddsType);
		if (value.toString() == "NaN") {
			return;
		}
		_actions.Calculate(oddsType, value);
	}

	getOdds(oddsType: OddsType) : number{
		var state = this.getStateFromStore();
		switch (oddsType) {
			default:
			case OddsType.Malay:
				return Number(state.malayOdds);
			case OddsType.Hk:
				return Number(state.hkOdds);
			case OddsType.Euro:
				return Number(state.euroOdds);
			case OddsType.Indo:
				return Number(state.indoOdds);
		}
	}

	handleOnChage(oddsType: OddsType, evt) {
		var value = evt.target.value;
		var state = this.getStateFromStore();
		switch (oddsType) {
			default:
			case OddsType.Malay:
				state.malayOdds = value;
				break;
			case OddsType.Hk:
				state.hkOdds = value;
				break;
			case OddsType.Euro:
				state.euroOdds = value;
				break;
			case OddsType.Indo:
				state.indoOdds = value;
				break;
		}
		this.setState(state);
	}

	stringToNumber(s: string): number {
		if (s == "") return 0;
		return Number(s);
	}

	numberToString(n: number) :string {
		if (n == undefined) {
			return "";
		}
		return n.toString();
	}

	render() {
		var state = this.getStateFromStore();
		var self = this;

		var contentStyle = {
			overflow: 'scroll',
		};

		var textStyle = {
			cursor: 'pointer',
			backgroundAttachment: 'scroll',
			backgroundSize: '16px 18px',
			backgroundPosition: '98% 50%',
			backgroundRepeat: 'no-repeat',
		};

		var malayOdds = state.malayOdds;
		var hkOdds = state.hkOdds;
		var euroOdds = state.euroOdds;
		var indoOdds = state.indoOdds;

		return (
			<div>
				<div className="cl-bar-title">
					<div className="cl-title">Odds Convert Table</div>
					</div>

				<div className="cl-content cl" style={contentStyle}>
					<div className="cl-article padded">
						<button onClick={this.handleOnClickCalculate.bind(this, OddsType.Malay)}>
							Malay
						</button>
						</div>
					<div className="cl-form padded">
						<input ref="manilaOdds" type="text" style={textStyle} value={malayOdds} onChange={this.handleOnChage.bind(this, OddsType.Malay)} />
						</div>

					<div className="cl-article padded">
						<button onClick={this.handleOnClickCalculate.bind(this, OddsType.Hk) }>
							HK
							</button>
						</div>
					<div className="cl-form padded">
						<input type="text" style={textStyle} value={hkOdds} onChange={this.handleOnChage.bind(this, OddsType.Hk) }/>
						</div>

					<div className="cl-article padded">
						<button onClick={this.handleOnClickCalculate.bind(this, OddsType.Euro) }>
							Euro
							</button>
						</div>
					<div className="cl-form padded">
						<input type="text" style={textStyle} value={euroOdds} onChange={this.handleOnChage.bind(this, OddsType.Euro) }/>
						</div>

					<div className="cl-article padded">
						<button onClick={this.handleOnClickCalculate.bind(this, OddsType.Indo) }>
							Indo</button>
						</div>
					<div className="cl-form padded">
						<input type="text" style={textStyle} value={indoOdds} onChange={this.handleOnChage.bind(this, OddsType.Indo) }/>
						</div>

					</div>
				</div>
		);
	}
}

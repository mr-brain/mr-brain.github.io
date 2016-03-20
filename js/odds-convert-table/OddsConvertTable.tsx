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

	handleOnClick(event) {
	}

	render() {
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

		return (
			<div>
				<div className="cl-bar-title">
					<div className="cl-title">Odds Convert Table</div>
					</div>

				<div className="cl-content cl" style={contentStyle}>
					<div className="cl-article padded">
						<button>Manila</button>
						</div>
					<div className="cl-form padded">
						<input ref="manilaOdds" type="text" style={textStyle} />
						</div>

					<div className="cl-article padded">
						<button>HK</button>
						</div>
					<div className="cl-form padded">
						<input type="text" style={textStyle} />
						</div>

					<div className="cl-article padded">
						<button>Euro</button>
						</div>
					<div className="cl-form padded">
						<input type="text" style={textStyle} />
						</div>

					<div className="cl-article padded">
						<button>Indo</button>
						</div>
					<div className="cl-form padded">
						<input type="text" style={textStyle} />
						</div>

					</div>
				</div>
		);
	}
}

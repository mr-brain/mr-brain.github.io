var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 't1', "OddsCalculatorStore", "Actions"], function (require, exports, React, t1, Store, Actions) {
    var FRefluxStoreComponent = t1.FRefluxStoreComponent;
    var OddsType = Actions.OddsType;
    var _actions = Actions._appActions;
    var OddsConvertTable = (function (_super) {
        __extends(OddsConvertTable, _super);
        function OddsConvertTable() {
            this.name = "MobileDemo1";
            _super.call(this, Store._appStore);
        }
        OddsConvertTable.prototype.componentWillMount = function () {
        };
        OddsConvertTable.prototype.componentWillUnmount = function () {
        };
        OddsConvertTable.prototype.componentDidMount = function () {
            _super.prototype.componentDidMount.call(this);
            var dom = this.refs["manilaOdds"];
            //dom.getDOMNode().setAttribute('autocomplete', 'off');
            dom.setAttribute('autocomplete', 'off');
        };
        OddsConvertTable.prototype.handleOnClickCalculate = function (oddsType, evt) {
            var value = this.getOdds(oddsType);
            if (value.toString() == "NaN") {
                return;
            }
            _actions.Calculate(oddsType, value);
        };
        OddsConvertTable.prototype.getOdds = function (oddsType) {
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
        };
        OddsConvertTable.prototype.handleOnChage = function (oddsType, evt) {
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
        };
        OddsConvertTable.prototype.stringToNumber = function (s) {
            if (s == "")
                return 0;
            return Number(s);
        };
        OddsConvertTable.prototype.numberToString = function (n) {
            if (n == undefined) {
                return "";
            }
            return n.toString();
        };
        OddsConvertTable.prototype.render = function () {
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
            return (React.createElement("div", null, React.createElement("div", {"className": "cl-bar-title"}, React.createElement("div", {"className": "cl-title"}, "Odds Convert Table")), React.createElement("div", {"className": "cl-content cl", "style": contentStyle}, React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", {"onClick": this.handleOnClickCalculate.bind(this, OddsType.Malay)}, "Malay")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"ref": "manilaOdds", "type": "text", "style": textStyle, "value": malayOdds, "onChange": this.handleOnChage.bind(this, OddsType.Malay)})), React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", {"onClick": this.handleOnClickCalculate.bind(this, OddsType.Hk)}, "HK")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"type": "text", "style": textStyle, "value": hkOdds, "onChange": this.handleOnChage.bind(this, OddsType.Hk)})), React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", {"onClick": this.handleOnClickCalculate.bind(this, OddsType.Euro)}, "Euro")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"type": "text", "style": textStyle, "value": euroOdds, "onChange": this.handleOnChage.bind(this, OddsType.Euro)})), React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", {"onClick": this.handleOnClickCalculate.bind(this, OddsType.Indo)}, "Indo")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"type": "text", "style": textStyle, "value": indoOdds, "onChange": this.handleOnChage.bind(this, OddsType.Indo)})))));
        };
        return OddsConvertTable;
    })(FRefluxStoreComponent);
    exports.OddsConvertTable = OddsConvertTable;
});
//# sourceMappingURL=OddsConvertTable.js.map
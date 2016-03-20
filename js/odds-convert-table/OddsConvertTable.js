var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 't1', "OddsCalculatorStore"], function (require, exports, React, t1, Store) {
    var FRefluxStoreComponent = t1.FRefluxStoreComponent;
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
        OddsConvertTable.prototype.handleOnClick = function (event) {
        };
        OddsConvertTable.prototype.render = function () {
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
            return (React.createElement("div", null, React.createElement("div", {"className": "cl-bar-title"}, React.createElement("div", {"className": "cl-title"}, "Odds Convert Table")), React.createElement("div", {"className": "cl-content cl", "style": contentStyle}, React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", null, "Manila")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"ref": "manilaOdds", "type": "text", "style": textStyle})), React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", null, "HK")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"type": "text", "style": textStyle})), React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", null, "Euro")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"type": "text", "style": textStyle})), React.createElement("div", {"className": "cl-article padded"}, React.createElement("button", null, "Indo")), React.createElement("div", {"className": "cl-form padded"}, React.createElement("input", {"type": "text", "style": textStyle})))));
        };
        return OddsConvertTable;
    })(FRefluxStoreComponent);
    exports.OddsConvertTable = OddsConvertTable;
});
//# sourceMappingURL=OddsConvertTable.js.map
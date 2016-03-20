var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 't1', "Actions"], function (require, exports, t1, Actions) {
    var FRefluxStore = t1.FRefluxStore;
    var OddsCalculateState = (function () {
        function OddsCalculateState() {
        }
        return OddsCalculateState;
    })();
    exports.OddsCalculateState = OddsCalculateState;
    var OddsCalculatorStore = (function (_super) {
        __extends(OddsCalculatorStore, _super);
        function OddsCalculatorStore(actions) {
            _super.call(this, actions);
            this._state = new OddsCalculateState();
        }
        OddsCalculatorStore.prototype.getState = function () {
            return this._state;
        };
        OddsCalculatorStore.prototype.onRequest = function (name) {
            this.trigger(this._state);
        };
        return OddsCalculatorStore;
    })(FRefluxStore);
    exports.OddsCalculatorStore = OddsCalculatorStore;
    exports._appStore = new OddsCalculatorStore([Actions._appActions]);
});
//# sourceMappingURL=OddsCalculatorStore.js.map
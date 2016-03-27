var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 't1'], function (require, exports, t1) {
    var FRefluxActions = t1.FRefluxActions;
    var OddsActionType;
    (function (OddsActionType) {
        OddsActionType[OddsActionType["Calculate"] = 0] = "Calculate";
    })(OddsActionType || (OddsActionType = {}));
    (function (OddsType) {
        OddsType[OddsType["Malay"] = 0] = "Malay";
        OddsType[OddsType["Hk"] = 1] = "Hk";
        OddsType[OddsType["Euro"] = 2] = "Euro";
        OddsType[OddsType["Indo"] = 3] = "Indo";
    })(exports.OddsType || (exports.OddsType = {}));
    var OddsType = exports.OddsType;
    var OddsActions = (function (_super) {
        __extends(OddsActions, _super);
        function OddsActions() {
            _super.call(this, OddsActionType);
        }
        OddsActions.prototype.Calculate = function (oddsType, odds) {
            this.dispatchEvent(OddsActionType.Calculate, oddsType, odds);
        };
        return OddsActions;
    })(FRefluxActions);
    exports.OddsActions = OddsActions;
    exports._appActions = new OddsActions();
});
//# sourceMappingURL=Actions.js.map
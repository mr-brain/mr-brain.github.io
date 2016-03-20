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
    var OddsType;
    (function (OddsType) {
        OddsType[OddsType["Manila"] = 0] = "Manila";
        OddsType[OddsType["HK"] = 1] = "HK";
        OddsType[OddsType["Euro"] = 2] = "Euro";
        OddsType[OddsType["Indo"] = 3] = "Indo";
    })(OddsType || (OddsType = {}));
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
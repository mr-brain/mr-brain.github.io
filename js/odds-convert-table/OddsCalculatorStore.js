var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 't1', "Actions"], function (require, exports, t1, Actions) {
    var FRefluxStore = t1.FRefluxStore;
    var OddsType = Actions.OddsType;
    var OddsCalculateState = (function () {
        function OddsCalculateState() {
        }
        return OddsCalculateState;
    })();
    exports.OddsCalculateState = OddsCalculateState;
    var OddsConverter = (function () {
        function OddsConverter() {
        }
        OddsConverter.prototype.malayTo = function (odds) {
            throw new Error("Not implement");
        };
        OddsConverter.prototype.toMalay = function (odds) {
            throw new Error("Not implement");
        };
        return OddsConverter;
    })();
    exports.OddsConverter = OddsConverter;
    var MalayOddsConvert = (function (_super) {
        __extends(MalayOddsConvert, _super);
        function MalayOddsConvert() {
            _super.apply(this, arguments);
        }
        MalayOddsConvert.prototype.malayTo = function (odds) {
            return odds;
        };
        MalayOddsConvert.prototype.toMalay = function (odds) {
            return odds;
        };
        return MalayOddsConvert;
    })(OddsConverter);
    exports.MalayOddsConvert = MalayOddsConvert;
    var HkOddsConvert = (function (_super) {
        __extends(HkOddsConvert, _super);
        function HkOddsConvert() {
            _super.apply(this, arguments);
        }
        HkOddsConvert.prototype.malayTo = function (odds) {
            if (odds > 0) {
                return odds;
            }
            return (-1 / odds);
        };
        HkOddsConvert.prototype.toMalay = function (odds) {
            return (-1 / odds);
        };
        return HkOddsConvert;
    })(OddsConverter);
    exports.HkOddsConvert = HkOddsConvert;
    var EuroOddsConvert = (function (_super) {
        __extends(EuroOddsConvert, _super);
        function EuroOddsConvert() {
            _super.apply(this, arguments);
        }
        EuroOddsConvert.prototype.malayTo = function (odds) {
            if (odds > 0) {
                return odds + 1;
            }
            return (-1 / odds) + 1;
        };
        EuroOddsConvert.prototype.toMalay = function (odds) {
            if (odds < 0) {
                return -1 / (odds - 1);
            }
            return odds - 1;
        };
        return EuroOddsConvert;
    })(OddsConverter);
    exports.EuroOddsConvert = EuroOddsConvert;
    var IndoOddsConvert = (function (_super) {
        __extends(IndoOddsConvert, _super);
        function IndoOddsConvert() {
            _super.apply(this, arguments);
        }
        IndoOddsConvert.prototype.malayTo = function (odds) {
            return (-1 / odds);
        };
        IndoOddsConvert.prototype.toMalay = function (odds) {
            return -1 / odds;
        };
        return IndoOddsConvert;
    })(OddsConverter);
    exports.IndoOddsConvert = IndoOddsConvert;
    var OddsCalculatorStore = (function (_super) {
        __extends(OddsCalculatorStore, _super);
        function OddsCalculatorStore(actions) {
            _super.call(this, actions);
            this._state = new OddsCalculateState();
            var table = this._oddsTable = [];
            table[OddsType.Malay] = new MalayOddsConvert();
            table[OddsType.Hk] = new HkOddsConvert();
            table[OddsType.Euro] = new EuroOddsConvert();
            table[OddsType.Indo] = new IndoOddsConvert();
        }
        OddsCalculatorStore.prototype.getState = function () {
            return this._state;
        };
        OddsCalculatorStore.prototype.onCalculate = function (oddsType, odds) {
            this._state.malayOdds = this.calculateOdds(oddsType, odds, OddsType.Malay);
            this._state.hkOdds = this.calculateOdds(oddsType, odds, OddsType.Hk);
            this._state.euroOdds = this.calculateOdds(oddsType, odds, OddsType.Euro);
            this._state.indoOdds = this.calculateOdds(oddsType, odds, OddsType.Indo);
            this.trigger(this._state);
        };
        OddsCalculatorStore.prototype.calculateOdds = function (fromOddsType, odds, toOddsType) {
            var fromConverter = this._oddsTable[fromOddsType];
            var toConverter = this._oddsTable[toOddsType];
            var malayOdds = fromConverter.toMalay(odds);
            var newOdds = toConverter.malayTo(malayOdds);
            return newOdds.toString();
        };
        return OddsCalculatorStore;
    })(FRefluxStore);
    exports.OddsCalculatorStore = OddsCalculatorStore;
    exports._appStore = new OddsCalculatorStore([Actions._appActions]);
});
//# sourceMappingURL=OddsCalculatorStore.js.map
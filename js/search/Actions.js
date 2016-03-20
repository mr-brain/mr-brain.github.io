var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 't1'], function (require, exports, t1) {
    var FRefluxActions = t1.FRefluxActions;
    var SearchActionType;
    (function (SearchActionType) {
        SearchActionType[SearchActionType["Search"] = 0] = "Search";
    })(SearchActionType || (SearchActionType = {}));
    var SearchActions = (function (_super) {
        __extends(SearchActions, _super);
        function SearchActions() {
            _super.call(this, SearchActionType);
        }
        SearchActions.prototype.Search = function (text) {
            this.dispatchEvent(SearchActionType.Search, text);
        };
        return SearchActions;
    })(FRefluxActions);
    exports.SearchActions = SearchActions;
    exports._appActions = new SearchActions();
});
//# sourceMappingURL=Actions.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 't1', "Actions", "taffy"], function (require, exports, t1, Actions, taffy) {
    var FRefluxStore = t1.FRefluxStore;
    taffy.none = null;
    var FoundItem = (function () {
        function FoundItem() {
        }
        return FoundItem;
    })();
    exports.FoundItem = FoundItem;
    var SearchState = (function () {
        function SearchState() {
        }
        return SearchState;
    })();
    exports.SearchState = SearchState;
    var SearchStore = (function (_super) {
        __extends(SearchStore, _super);
        function SearchStore(actions) {
            _super.call(this, actions);
            this._state = new SearchState();
            this.init();
        }
        SearchStore.prototype.init = function () {
            var self = this;
            $.getJSON("/Blog/BlogData.json", function (data) {
                self._db = TAFFY(data);
                console.log("Database OK");
            });
        };
        SearchStore.prototype.getState = function () {
            return this._state;
        };
        SearchStore.prototype.onSearch = function (text) {
            var state = this._state;
            var items = this._db({ Title: { like: text } });
            if (items.count() == 0) {
                state.foundResult = null;
                state.searchStatus = "Not found";
            }
            else {
                state.searchStatus = null;
                state.foundResult = new Array();
                items.each(function (data) {
                    var item = new FoundItem();
                    item.title = data.Title;
                    item.relFilename = data.RelFilename;
                    item.createTime = data.CreateTime;
                    state.foundResult.push(item);
                });
            }
            console.log(state.foundResult);
            this.trigger(this._state);
        };
        return SearchStore;
    })(FRefluxStore);
    exports.SearchStore = SearchStore;
    exports._appStore = new SearchStore([Actions._appActions]);
});
//# sourceMappingURL=Store.js.map
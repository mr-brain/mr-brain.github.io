var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", 'react', 't1', "Store", "Actions"], function (require, exports, React, t1, Store, Actions) {
    var FRefluxStoreComponent = t1.FRefluxStoreComponent;
    var _appActions = Actions._appActions;
    var SearchBox = (function (_super) {
        __extends(SearchBox, _super);
        function SearchBox() {
            _super.call(this, Store._appStore);
            this._store.listen("change", this.onChange.bind(this));
        }
        SearchBox.prototype.componentWillMount = function () {
        };
        SearchBox.prototype.componentWillUnmount = function () {
        };
        SearchBox.prototype.componentDidMount = function () {
        };
        SearchBox.prototype.onChange = function () {
            this.forceUpdate();
        };
        SearchBox.prototype.handleOnSearchClick = function (event) {
            var state = this.getStateFromStore();
            state.searchStatus = "searching";
            _appActions.Search(state.searchText);
            //this.setState(state);
        };
        SearchBox.prototype.handleOnSearchChange = function (event) {
            var value = event.target.value;
            var state = this.getStateFromStore();
            state.searchText = value;
            //this.setState(state);
        };
        SearchBox.prototype.render = function () {
            console.log("SearchBox");
            var self = this;
            var state = this.getStateFromStore();
            var searchResult = [];
            if (state.foundResult != null) {
                state.foundResult.forEach(function (item) {
                    var relLink = item.relFilename.replace("\\", "/");
                    var idx = relLink.lastIndexOf(".");
                    relLink = "/Blog/" + relLink.substr(0, idx) + ".html";
                    var html = (React.createElement("div", {"className": "input-group"}, React.createElement("span", null, React.createElement("a", {"href": relLink}, " ", item.title))));
                    searchResult.push(html);
                });
            }
            return (React.createElement("div", null, React.createElement("h4", null, "Blog Search"), React.createElement("div", {"className": "input-group"}, React.createElement("input", {"type": "text", "className": "form-control", "onChange": this.handleOnSearchChange.bind(this)}), React.createElement("span", {"className": "input-group-btn"}, React.createElement("button", {"className": "btn btn-default", "type": "button", "onClick": this.handleOnSearchClick.bind(this)}, React.createElement("span", {"className": "glyphicon glyphicon-search"})))), React.createElement("div", {"className": "input-group"}, React.createElement("span", null, state.searchStatus)), searchResult));
        };
        return SearchBox;
    })(FRefluxStoreComponent);
    exports.SearchBox = SearchBox;
});
//# sourceMappingURL=SearchBox.js.map
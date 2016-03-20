define(["require", "exports", 'react-dom', "SearchBox"], function (require, exports, ReactDOM, v1) {
    var SearchBox = v1.SearchBox;
    $(function () {
        ReactDOM.render(React.createElement("div", null, React.createElement(SearchBox, null)), document.getElementById('SearchBox'));
    });
});
//# sourceMappingURL=Main.js.map
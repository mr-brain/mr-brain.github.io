define(["require", "exports", 'react-dom', "OddsConvertTable"], function (require, exports, ReactDOM, v1) {
    var OddsConvertTable = v1.OddsConvertTable;
    $(function () {
        ReactDOM.render(React.createElement("div", null, React.createElement(OddsConvertTable, null)), document.getElementById('app'));
    });
});
//# sourceMappingURL=Main.js.map
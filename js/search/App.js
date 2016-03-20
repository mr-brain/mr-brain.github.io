(function () {
    var baseUrl = "/js/search/";
    require.config({
        paths: {
            "Actions": baseUrl + "Actions",
            "ViewModels": baseUrl + "ViewModels",
            "Store": baseUrl + "Store",
            "Main": baseUrl + "Main",
            "App": baseUrl + "App",
            "SearchBox": baseUrl + "SearchBox",
            "taffy": "/Scripts/taffydb-0f6e07b/taffy",
        },
        shim: {
            'taffy': {
                exports: 'TAFFY'
            }
        }
    });
})();
define(["require", "exports", 'Main'], function (require, exports, main) {
});
//# sourceMappingURL=App.js.map
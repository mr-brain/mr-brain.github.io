var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "././mixin"], function (require, exports, Mixin) {
    var Component = (function (_super) {
        __extends(Component, _super);
        function Component() {
            _super.apply(this, arguments);
        }
        Component.prototype.render = function () {
            return null;
        };
        return Component;
    })(Mixin);
    return Component;
});
//# sourceMappingURL=component.js.map
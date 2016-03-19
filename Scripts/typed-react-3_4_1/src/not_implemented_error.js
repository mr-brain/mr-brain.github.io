define(["require", "exports"], function (require, exports) {
    var NotImplementedError = (function () {
        function NotImplementedError(methodName) {
            this.name = "NotImplementedError";
            this.message = methodName + " should be implemented by React";
        }
        return NotImplementedError;
    })();
    return NotImplementedError;
});
//# sourceMappingURL=not_implemented_error.js.map
define(["require", "exports", "./extract_prototype"], function (require, exports, extractPrototype) {
    function createMixin(clazz) {
        return extractPrototype(clazz);
    }
    return createMixin;
});
//# sourceMappingURL=create_mixin.js.map
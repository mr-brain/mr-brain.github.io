define(["require", "exports", "./extract_prototype", "react"], function (require, exports, extractPrototype, react) {
    function createClass(clazz, mixins) {
        var spec = extractPrototype(clazz);
        spec.displayName = clazz.prototype.constructor.name;
        if (spec.componentWillMount !== undefined) {
            var componentWillMount = spec.componentWillMount;
            spec.componentWillMount = function () {
                clazz.apply(this);
                componentWillMount.apply(this);
            };
        }
        else {
            spec.componentWillMount = function () {
                clazz.apply(this);
            };
        }
        if (mixins !== undefined && mixins !== null) {
            spec.mixins = mixins;
        }
        return react.createClass(spec);
    }
    return createClass;
});
//# sourceMappingURL=create_class.js.map
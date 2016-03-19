import Mixin = require("./mixin");
import react = require("react");
declare function createMixin<P, S>(clazz: {
    new (): Mixin<P, S>;
}): react.Mixin<P, S>;
export = createMixin;

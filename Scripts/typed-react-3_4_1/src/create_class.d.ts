import Component = require("./component");
import react = require("react");
declare function createClass<P, S>(clazz: {
    new (): Component<P, S>;
}, mixins?: react.Mixin<P, S>[]): react.ComponentClass<P>;
export = createClass;

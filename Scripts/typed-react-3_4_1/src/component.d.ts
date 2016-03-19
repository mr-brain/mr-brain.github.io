import Mixin = require("././mixin");
import react = require("react");
declare class Component<P, S> extends Mixin<P, S> implements react.ClassicComponent<P, S> {
    render(): react.ReactElement<any>;
}
export = Component;

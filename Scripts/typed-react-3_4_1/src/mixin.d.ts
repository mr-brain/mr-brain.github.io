import react = require("react");
declare class Mixin<P, S> implements react.Mixin<P, S> {
    refs: {
        [key: string]: react.Component<any, any>;
    };
    props: P;
    state: S;
    context: any;
    getDOMNode(): Element;
    setState(nextState: S | ((prevState: S, props: P) => S), callback?: () => void): void;
    replaceState(nextState: S, callback?: () => void): void;
    forceUpdate(callback?: () => void): void;
    isMounted(): boolean;
    setProps(nextProps: P, callback?: () => void): void;
    replaceProps(nextProps: P, callback?: () => void): void;
}
export = Mixin;

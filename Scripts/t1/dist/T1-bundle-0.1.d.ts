declare module collections {
    interface ICompareFunction<T> {
        (a: T, b: T): number;
    }
    interface IEqualsFunction<T> {
        (a: T, b: T): boolean;
    }
    interface ILoopFunction<T> {
        (a: T): boolean;
    }
    function defaultCompare<T>(a: T, b: T): number;
    function defaultEquals<T>(a: T, b: T): boolean;
    function defaultToString(item: any): string;
    function makeString<T>(item: T, join?: string): string;
    function isFunction(func: any): boolean;
    function isUndefined(obj: any): boolean;
    function isString(obj: any): boolean;
    function reverseCompareFunction<T>(compareFunction: ICompareFunction<T>): ICompareFunction<T>;
    function compareToEquals<T>(compareFunction: ICompareFunction<T>): IEqualsFunction<T>;
    module arrays {
        function indexOf<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): number;
        function lastIndexOf<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): number;
        function contains<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): boolean;
        function remove<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): boolean;
        function frequency<T>(array: T[], item: T, equalsFunction?: collections.IEqualsFunction<T>): number;
        function equals<T>(array1: T[], array2: T[], equalsFunction?: collections.IEqualsFunction<T>): boolean;
        function copy<T>(array: T[]): T[];
        function swap<T>(array: T[], i: number, j: number): boolean;
        function toString<T>(array: T[]): string;
        function forEach<T>(array: T[], callback: (item: T) => boolean): void;
    }
    interface ILinkedListNode<T> {
        element: T;
        next: ILinkedListNode<T>;
    }
    class LinkedList<T> {
        firstNode: ILinkedListNode<T>;
        private lastNode;
        private nElements;
        constructor();
        add(item: T, index?: number): boolean;
        first(): T;
        last(): T;
        elementAtIndex(index: number): T;
        indexOf(item: T, equalsFunction?: IEqualsFunction<T>): number;
        contains(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        remove(item: T, equalsFunction?: IEqualsFunction<T>): boolean;
        clear(): void;
        equals(other: LinkedList<T>, equalsFunction?: IEqualsFunction<T>): boolean;
        private equalsAux(n1, n2, eqF);
        removeElementAtIndex(index: number): T;
        forEach(callback: (item: T) => boolean): void;
        reverse(): void;
        toArray(): T[];
        size(): number;
        isEmpty(): boolean;
        toString(): string;
        private nodeAtIndex(index);
        private createNode(item);
    }
    interface IDictionaryPair<K, V> {
        key: K;
        value: V;
    }
    class Dictionary<K, V> {
        protected table: {
            [key: string]: IDictionaryPair<K, V>;
        };
        protected nElements: number;
        protected toStr: (key: K) => string;
        constructor(toStrFunction?: (key: K) => string);
        getValue(key: K): V;
        setValue(key: K, value: V): V;
        remove(key: K): V;
        keys(): K[];
        values(): V[];
        forEach(callback: (key: K, value: V) => any): void;
        containsKey(key: K): boolean;
        clear(): void;
        size(): number;
        isEmpty(): boolean;
        toString(): string;
    }
    class LinkedDictionary<K, V> extends Dictionary<K, V> {
        private head;
        private tail;
        constructor(toStrFunction?: (key: K) => string);
        private appendToTail(entry);
        private getLinkedDictionaryPair(key);
        getValue(key: K): V;
        remove(key: K): V;
        clear(): void;
        private replace(oldPair, newPair);
        setValue(key: K, value: V): V;
        keys(): K[];
        values(): V[];
        forEach(callback: (key: K, value: V) => any): void;
    }
    class MultiDictionary<K, V> {
        private dict;
        private equalsF;
        private allowDuplicate;
        constructor(toStrFunction?: (key: K) => string, valuesEqualsFunction?: IEqualsFunction<V>, allowDuplicateValues?: boolean);
        getValue(key: K): V[];
        setValue(key: K, value: V): boolean;
        remove(key: K, value?: V): boolean;
        keys(): K[];
        values(): V[];
        containsKey(key: K): boolean;
        clear(): void;
        size(): number;
        isEmpty(): boolean;
    }
    class Heap<T> {
        private data;
        private compare;
        constructor(compareFunction?: ICompareFunction<T>);
        private leftChildIndex(nodeIndex);
        private rightChildIndex(nodeIndex);
        private parentIndex(nodeIndex);
        private minIndex(leftChild, rightChild);
        private siftUp(index);
        private siftDown(nodeIndex);
        peek(): T;
        add(element: T): boolean;
        removeRoot(): T;
        contains(element: T): boolean;
        size(): number;
        isEmpty(): boolean;
        clear(): void;
        forEach(callback: (item: T) => boolean): void;
    }
    class Stack<T> {
        private list;
        constructor();
        push(elem: T): boolean;
        add(elem: T): boolean;
        pop(): T;
        peek(): T;
        size(): number;
        contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        isEmpty(): boolean;
        clear(): void;
        forEach(callback: ILoopFunction<T>): void;
    }
    class Queue<T> {
        private list;
        constructor();
        enqueue(elem: T): boolean;
        add(elem: T): boolean;
        dequeue(): T;
        peek(): T;
        size(): number;
        contains(elem: T, equalsFunction?: IEqualsFunction<T>): boolean;
        isEmpty(): boolean;
        clear(): void;
        forEach(callback: ILoopFunction<T>): void;
    }
    class PriorityQueue<T> {
        private heap;
        constructor(compareFunction?: ICompareFunction<T>);
        enqueue(element: T): boolean;
        add(element: T): boolean;
        dequeue(): T;
        peek(): T;
        contains(element: T): boolean;
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        forEach(callback: ILoopFunction<T>): void;
    }
    class Set<T> {
        private dictionary;
        constructor(toStringFunction?: (item: T) => string);
        contains(element: T): boolean;
        add(element: T): boolean;
        intersection(otherSet: Set<T>): void;
        union(otherSet: Set<T>): void;
        difference(otherSet: Set<T>): void;
        isSubsetOf(otherSet: Set<T>): boolean;
        remove(element: T): boolean;
        forEach(callback: ILoopFunction<T>): void;
        toArray(): T[];
        isEmpty(): boolean;
        size(): number;
        clear(): void;
        toString(): string;
    }
    class Bag<T> {
        private toStrF;
        private dictionary;
        private nElements;
        constructor(toStrFunction?: (item: T) => string);
        add(element: T, nCopies?: number): boolean;
        count(element: T): number;
        contains(element: T): boolean;
        remove(element: T, nCopies?: number): boolean;
        toArray(): T[];
        toSet(): Set<T>;
        forEach(callback: ILoopFunction<T>): void;
        size(): number;
        isEmpty(): boolean;
        clear(): void;
    }
    class BSTree<T> {
        private root;
        private compare;
        private nElements;
        constructor(compareFunction?: ICompareFunction<T>);
        add(element: T): boolean;
        clear(): void;
        isEmpty(): boolean;
        size(): number;
        contains(element: T): boolean;
        remove(element: T): boolean;
        inorderTraversal(callback: ILoopFunction<T>): void;
        preorderTraversal(callback: ILoopFunction<T>): void;
        postorderTraversal(callback: ILoopFunction<T>): void;
        levelTraversal(callback: ILoopFunction<T>): void;
        minimum(): T;
        maximum(): T;
        forEach(callback: ILoopFunction<T>): void;
        toArray(): T[];
        height(): number;
        private searchNode(node, element);
        private transplant(n1, n2);
        private removeNode(node);
        private inorderTraversalAux(node, callback, signal);
        private levelTraversalAux(node, callback);
        private preorderTraversalAux(node, callback, signal);
        private postorderTraversalAux(node, callback, signal);
        private minimumAux(node);
        private maximumAux(node);
        private heightAux(node);
        private insertNode(node);
        private createNode(element);
    }
}
declare module Events {
    class EventEmitter {
        constructor();
        _events: any;
        _onceReturnValue: any;
        _getEvents(): any;
        getListeners(evt: any): any;
        flattenListeners(listeners: any): any[];
        getListenersAsObject(evt: any): any;
        addListener(evt: any, listener: any): EventEmitter;
        on: () => any;
        addOnceListener(evt: any, listener: any): EventEmitter;
        once: () => any;
        defineEvent(evt: any): EventEmitter;
        defineEvents(evts: any): EventEmitter;
        removeListener(evt: any, listener: any): EventEmitter;
        off: () => any;
        addListeners(evt: any, listeners: any): EventEmitter;
        removeListeners(evt: any, listeners: any): EventEmitter;
        manipulateListeners(remove: any, evt: any, listeners: any): EventEmitter;
        removeEvent(evt: any): EventEmitter;
        removeAllListeners: () => any;
        emitEvent(evt: any, args: any): EventEmitter;
        trigger: () => any;
        emit(evt: any): EventEmitter;
        setOnceReturnValue(value: any): EventEmitter;
        _getOnceReturnValue(): any;
    }
}
declare function GetTypename(obj: any): any;
interface JQuery {
    serializeObject(): any;
}
declare module t1 {
    function applyMixins(derivedCtor: any, baseCtors: any[]): void;
}
interface ILiteEvent<T> {
    on(handler: {
        (data?: T): void;
    }): any;
    off(handler: {
        (data?: T): void;
    }): any;
}
declare class LiteEvent<T> implements ILiteEvent<T> {
    private _handlers;
    on(handler: {
        (data?: T): void;
    }): void;
    off(handler: {
        (data?: T): void;
    }): void;
    trigger(data?: T): void;
}
interface String {
    startsWith(str: string): boolean;
    endsWith(str: string): boolean;
}
interface StringConstructor {
    format: (format: string, ...args: any[]) => string;
    isNullOrEmpty: (str: string) => boolean;
}
interface Date {
    ToDateTimeString(): string;
}
declare module t1 {
    class EnumEx {
        static getNames(e: any): string[];
        static getName(e: any): string;
        static getValues(e: any): number[];
        static getNamesAndValues(e: any): {
            name: string;
            value: number;
        }[];
    }
}
declare module t1 {
    class Logger {
        static log(...args: any[]): void;
    }
}
declare module t1 {
    interface IIocContainer {
        Register(name: string, type: Function): void;
        IsRegistered(name: string): boolean;
        Resolve(name: string): any;
    }
    class IocContainer implements IIocContainer {
        private _registeredObjects;
        private FunctionArguments;
        Register(name: string, type: Function): void;
        IsRegistered(name: string): boolean;
        Resolve(name: string): any;
        private GetRegisteredObject(Name);
        private GetParameters(RegObject);
        private ResolveParameters(List);
        private CreateDependancies(List);
    }
    class RegisteredObject {
        Name: string;
        Type: any;
        constructor(Name: string, Type: any);
    }
}
declare module t1 {
    class WebRequestSettings {
        url: string;
        type: string;
        dataType: string;
        data: string;
        success: (data: any, textStatus: string, jqXHR: JQueryXHR) => any;
        error: (err: any) => void;
    }
    class WebClient {
        SendRequest(settings: WebRequestSettings): void;
        PostRequest(settings: WebRequestSettings): void;
    }
}
declare module P {
    function defer<Value>(): Deferred<Value>;
    function resolve<Value>(v: Value): Promise<Value>;
    function reject<Value>(err: Rejection): Promise<Value>;
    function unfold<Seed, Element>(unspool: (current: Seed) => {
        promise: Promise<Element>;
        next?: Seed;
    }, seed: Seed): Promise<Element[]>;
    enum Status {
        Unfulfilled = 0,
        Rejected = 1,
        Resolved = 2,
    }
    interface Rejection {
        message: string;
    }
    interface PromiseState<Value> {
        status: Status;
        result?: Value;
        error?: Rejection;
    }
    interface Promise<Value> extends PromiseState<Value> {
        then<T2>(f: (v: Value) => Promise<T2>): Promise<T2>;
        then<T2>(f: (v: Value) => T2): Promise<T2>;
        done(f: (v: Value) => void): Promise<Value>;
        fail(f: (err: Rejection) => void): Promise<Value>;
        always(f: (v?: Value, err?: Rejection) => void): Promise<Value>;
    }
    interface Deferred<Value> extends PromiseState<Value> {
        promise(): Promise<Value>;
        resolve(result: Value): Deferred<Value>;
        reject(err: Rejection): Deferred<Value>;
        done(f: (v: Value) => void): Deferred<Value>;
        fail(f: (err: Rejection) => void): Deferred<Value>;
        always(f: (v?: Value, err?: Rejection) => void): Deferred<Value>;
    }
    function when(...promises: Promise<any>[]): Promise<any[]>;
    interface Generator<E> {
        (): Iterator<E>;
    }
    interface Iterator<E> {
        advance(): Promise<boolean>;
        current: E;
    }
    function generator<E>(g: () => () => Promise<E>): Generator<E>;
    function iterator<E>(f: () => Promise<E>): Iterator<E>;
    function each<E>(gen: Generator<E>, f: (e: E) => void): Promise<{}>;
    function isUndefined(v: any): boolean;
}
declare module t1 {
    import Reflux = RefluxCore;
    interface RefluxAction {
        actionName: string;
    }
    abstract class FRefluxActions<TActionEnum> {
        actionEnum: TActionEnum;
        actionNames: string[];
        _refluxActions: any;
        constructor(actionEnumType: any);
        listenToAllActions(action: RefluxAction, args: any[]): void;
        private _listenToAllActions(action);
        getActionName(actionEnum: TActionEnum): string;
        dispatchEvent(actionEnum: TActionEnum, ...args: any[]): void;
    }
    var _FRefluxAppStore: FRefluxStore<any>;
    type FRefluxOnEventHandler = (...args: any[]) => void;
    class FRefluxStoreActionArgs {
        actionName: string;
        args: any[];
    }
    type FRefluxOnActionHandler = (sender: Object, eventArgs: FRefluxStoreActionArgs) => void;
    abstract class FRefluxStore<TStateModel> {
        _actions: FRefluxActions<any>[];
        _refluxStore: Reflux.Store;
        constructor(actions: FRefluxActions<any>[]);
        private _onAction;
        onAction: ILiteEvent<FRefluxStoreActionArgs>;
        abstract getState(): TStateModel;
        trigger(...args: any[]): void;
        initialize(): void;
        private createListenToActions<TActions>(actions);
        getAllRefluxActions<TActions extends FRefluxActions<any>>(actions: TActions[]): any[];
        private createRefluxStore<TActions>(actions);
        listenToAllActions(actionName: string, ...args: any[]): void;
        getActionName(action: number): string;
        listen(actionName: string | number, callback: Function): void;
    }
    abstract class FRefluxReducerComponent<TProps, TState> extends React.Component<TProps, TState> {
        _store: FRefluxStore<any>;
        _isMounted: boolean;
        constructor();
        abstract getStateFromStore(state: any): TState;
        getState(): TState;
        componentDidMount(): void;
        componentWillUnmount(): void;
        handleStoreChanged(): void;
        handleAllActions(eventArgs: FRefluxStoreActionArgs): void;
    }
    type GetComponentTypeFromModuleCallback = (...moduleFiles: any[]) => any;
    abstract class FRefluxStoreComponent<TProps, TState> extends React.Component<TProps, TState> {
        _lazyLoadedComponent: any;
        _store: FRefluxStore<TState>;
        _isMounted: boolean;
        constructor(store: FRefluxStore<TState>);
        name: string;
        getStateFromStore(): TState;
        componentDidMount(): void;
        componentWillUnmount(): void;
        handleStoreChanged(): void;
        preRender(): JSX.Element;
        lazyRender(): any;
        lazyLoadComponent(moduleNames: string[], getComponentTypeFromModuleCallback: GetComponentTypeFromModuleCallback): void;
    }
    class FReflux {
        static connectToStore(Component: any, store: FRefluxStore<any>, getStateFromStore: any): React.ClassicComponentClass<{}>;
    }
}
declare module t1 {
    type Callback = (args: any) => void;
    type RequireOnceLoader = (dependencies: string[], runCallback?: Callback) => void;
    class LazyRequire {
        static once(): RequireOnceLoader;
    }
}

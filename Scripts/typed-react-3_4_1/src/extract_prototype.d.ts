declare function extractPrototype<T>(clazz: {
    new (): T;
}): T;
export = extractPrototype;

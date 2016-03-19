declare class NotImplementedError implements Error {
    name: string;
    message: string;
    constructor(methodName: string);
}
export = NotImplementedError;

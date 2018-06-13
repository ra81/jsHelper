class AssertEqualError extends Error {
    readonly a: any;
    readonly b: any;

    constructor(a: any, b: any) {
        super("objects are not equal.");
        this.name = "AssertEqualError";
        this.a = a;
        this.b = b;
    }
}
class AssertIsTrueError extends Error {
    readonly value: boolean;

    constructor(val: boolean) {
        super(`"${val}" is not true.`);
        this.name = "AssertIsTrueError";
        this.value = val;
    }
}
class AssertIsFalseError extends Error {
    readonly value: boolean;

    constructor(val: boolean) {
        super(`"${val}" is not false.`);
        this.name = "AssertIsFalseError";
        this.value = val;
    }
}


class Assert {

    static areEqual = function <T>(a: T, b: T) {
        if (typeof a != typeof b)
            throw new AssertEqualError(a, b);

        if (typeof a == "number" || typeof a == "string")
            if (a != b)
                throw new AssertEqualError(a, b);

        // объекты и прочая херь
        if (!deepCompare(a, b))
            throw new AssertEqualError(a, b);
    }

    static isTrue = (b: boolean) => {
        if (b != true)
            throw new AssertIsTrueError(b);
    }

    static isFalse = (b: boolean) => {
        if (b == true)
            throw new AssertIsFalseError(b);
    }

    static throwError = (func: IAction0, error: Error) => {
        try {
            func();
        }
        catch (err) {
            if (err.constructor === error.constructor)
                return;
        }

        throw new Error("не то блеать");
    }
}

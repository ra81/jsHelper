class AssertEqualError extends Error {
    constructor(a, b) {
        super("objects are not equal.");
        this.name = "AssertEqualError";
        this.a = a;
        this.b = b;
    }
}
class AssertIsTrueError extends Error {
    constructor(val) {
        super(`"${val}" is not true.`);
        this.name = "AssertIsTrueError";
        this.value = val;
    }
}
class AssertIsFalseError extends Error {
    constructor(val) {
        super(`"${val}" is not false.`);
        this.name = "AssertIsFalseError";
        this.value = val;
    }
}
class Assert {
}
Assert.areEqual = function (a, b) {
    if (typeof a != typeof b)
        throw new AssertEqualError(a, b);
    if (typeof a == "number" || typeof a == "string")
        if (a != b)
            throw new AssertEqualError(a, b);
    // объекты и прочая херь
    if (!deepCompare(a, b))
        throw new AssertEqualError(a, b);
};
Assert.isTrue = (b) => {
    if (b != true)
        throw new AssertIsTrueError(b);
};
Assert.isFalse = (b) => {
    if (b == true)
        throw new AssertIsFalseError(b);
};
Assert.throwError = (func, error) => {
    try {
        func();
    }
    catch (err) {
        if (err.constructor === error.constructor)
            return;
    }
    throw new Error("не то блеать");
};

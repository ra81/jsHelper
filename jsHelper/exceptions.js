//
// Свои исключения
// 
class ArgumentError extends Error {
    constructor(argument, message) {
        let msg = "argument";
        if (message)
            msg += " " + message;
        super(msg);
    }
}
class ArgumentNullError extends Error {
    constructor(argument) {
        super(argument);
    }
}

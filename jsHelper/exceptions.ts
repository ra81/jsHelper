
//
// Свои исключения
// 

class ArgumentError extends Error {
    constructor(argument: string, message?: string) {
        let msg = "argument";
        if (message)
            msg += " " + message;

        super(msg);
    }
}

class ArgumentNullError extends Error {
    constructor(argument: string) {
        super(argument);
    }
}


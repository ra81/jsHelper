



appendModule("тест коллекций arr, dict", () => {
    it("keys", () => {
        let a = { a: 1, b: 2 };
        let res = keys(a);
        Assert.areEqual(res.sort(), ["a", "b"].sort());
    });

    it("isEmpty", () => {
        let a = { a: 1, b: 2 };
        Assert.isFalse(isEmpty(a));

        let b = {};
        Assert.isTrue(isEmpty(b));

        let c: any = null;
        Assert.throwError(() => isEmpty(c), new ArgumentError(""));
    });


});
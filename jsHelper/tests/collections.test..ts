



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
        Assert.throwError(() => isEmpty(c), new ArgumentNullError(""));
    });

    it("dict2String dict has keys", () => {
        let dict: IDictionaryN<string> = { [10]: "vasya", [20]: "petya" };
        let res = dict2String(dict);

        Assert.areEqual(res, "10:vasya, 20:petya");
    });
    it("dict2String isEmpty", () => {
        let dict: IDictionaryN<string> = {};
        let res = dict2String(dict);

        Assert.areEqual(res, "");
    });

    it("sdfsdf", () => {

        //let dic: IDictionary<string> = { ["as"]: "somevalue" };
        //let d = df(dic, "as");

        //function df<D extends (IDictionary<any> | IDictionaryN<any>)>(dic: D, key: string) {
        //    let k: Extract<keyof D, string> = key;
            
        //    return dic[key];
        //}
    });
});
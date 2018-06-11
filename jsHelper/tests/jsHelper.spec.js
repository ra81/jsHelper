/// <reference path="../jsHelper.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../Scripts/typings/es6-promise/es6-promise.d.ts" />
describe("Модуль нах", function () {
    //var person: Person;
    //beforeEach(() => {
    //    person = new Person();
    //    person.setFirstName("Joe");
    //    person.setLastName("Smith");
    //});
    it("ключи объекта", function () {
        var obj = { a: 1, b: 2 };
        var res = keys(obj);
        expect(res).toEqual(["a", "b"]);
    });
});
describe("хуйня 2", function () {
    //var person: Person;
    //beforeEach(() => {
    //    person = new Person();
    //    person.setFirstName("Joe");
    //    person.setLastName("Smith");
    //});
    it("ключи другие", function () {
        var obj = { a: 1, b: 2 };
        var res = keys(obj);
        expect(res).toEqual(["a", "b"]);
    });
});

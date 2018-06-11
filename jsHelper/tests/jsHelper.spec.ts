/// <reference path="../jsHelper.ts" />
/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../Scripts/typings/es6-promise/es6-promise.d.ts" />

describe("Модуль нах", () => {

    //var person: Person;

    //beforeEach(() => {
    //    person = new Person();
    //    person.setFirstName("Joe");
    //    person.setLastName("Smith");
    //});

    it("ключи объекта", () => {
        let obj = { a: 1, b: 2 };
        let res = keys(obj);

        expect(res).toEqual(["a", "b"])
    });

});

describe("хуйня 2", () => {

    //var person: Person;

    //beforeEach(() => {
    //    person = new Person();
    //    person.setFirstName("Joe");
    //    person.setLastName("Smith");
    //});

    it("ключи другие", () => {
        let obj = { a: 1, b: 2 };
        let res = keys(obj);

        expect(res).toEqual(["a", "b"])
    });

});

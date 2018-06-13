var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
appendModule("ajax запросы", () => {
    it("tryGet_async", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://virtonomica.ru/olga/main/user/privat/persondata/message`;
            let html = yield tryGet_async(url);
            let $div = $(html).find(".date_time");
            Assert.isTrue($div.length == 1);
        });
    });
    it("tryGetJSON_async", function () {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://virtonomica.ru/api/nika/main/unittype/produce?id=423194`;
            let jsonObj = yield tryGetJSON_async(url);
            Assert.isTrue(keys(jsonObj).length == 2);
        });
    });
});

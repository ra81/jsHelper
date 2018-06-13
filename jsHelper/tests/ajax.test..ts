
appendModule("ajax запросы", () => {
    it("tryGet_async", async function () {
        let url = `https://virtonomica.ru/olga/main/user/privat/persondata/message`;
        let html = await tryGet_async(url);
        let $div = $(html).find(".date_time");

        Assert.isTrue($div.length == 1);
    });

    it("tryGetJSON_async", async function() {
        let url = `https://virtonomica.ru/api/nika/main/unittype/produce?id=423194`;
        let jsonObj = await tryGetJSON_async(url);

        Assert.isTrue(keys(jsonObj).length == 2);
    });
});
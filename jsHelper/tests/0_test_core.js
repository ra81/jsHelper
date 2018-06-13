/*
    вся обвязка для работы тестера. Ассерты в другом файле.
    Нужна ХТМЛ страница с контейнером куда все это будет рисоваться.
    По дефолту сразу рисует на текущее окно.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// var нужен а не let иначе будем получать часто андеф для переменной
var TestSet;
var CurrentModule;
/**
 * Добавляет новыйы тест модуль. Модуль содержит набор тестов.
 * @param desc описание модуля
 * @param tests функция добавляющая тесты по сути
 */
function appendModule(desc, tests) {
    let m = [desc, new Map()];
    // создадим контейнер для модулей
    if (TestSet == null)
        TestSet = new Map();
    TestSet.set(Symbol(desc), m);
    CurrentModule = m;
    tests();
    return m;
}
/**
 * Добавляет в текущий модуль новый тест. Использовать ВНЕ модулей нельзя.
 * @param desc описание теста.
 * @param func сам тест.
 */
function it(desc, func) {
    appendTest(desc, func);
    function appendTest(desc, func) {
        let t = [desc, func];
        CurrentModule[1].set(Symbol(desc), t);
        return t;
    }
}
/** заводит отрисовку тестов и настраивает кнопки хуепки */
function testRun_async() {
    return __awaiter(this, void 0, void 0, function* () {
        let $content = $("#test-list");
        if ($content.length <= 0)
            throw new Error("не найден контейнер #test-list");
        let $tbl_tpl = $(`<table class="grid">
                      <tr>
                        <th>go</th>
                        <th>Тест</th>
                        <th>Результат</th>
                        <th>Ошибка</th>
                    </tr>
                    </table>`);
        let $allGoBtn = $(`<input class="allGo" type="button" value="all go">`);
        $allGoBtn.data("content", $content);
        $content.append($allGoBtn);
        // отображение таблиц с тестами
        for (let [symb, mod] of TestSet) {
            let [desc, tests] = mod;
            let h2 = `<h2>${desc}</h2>`;
            let $moduleGoBtn = $(`<input class="moduleGo" type="button" value="module go">`);
            let $tbl = $tbl_tpl.clone();
            $tbl.data("key", symb);
            $moduleGoBtn.data("tbl", $tbl);
            // строки с тестами
            let even = false;
            for (let [tsymbol, test] of tests) {
                let [desc, func] = test;
                let $tr = $(`<tr class=${even ? "even" : "odd"}>
                            <td class="run"><input class="go" type="button" value="go"></td>
                            <td class="desc">${desc}</td>
                            <td class="res"> - </td>
                            <td class="error"> - </td>
                        </tr>`);
                $tr.data("key", tsymbol);
                $tbl.append($tr);
                even = even ? false : true;
            }
            $content.append(h2, $tbl, $moduleGoBtn);
            $tbl.on("click", "input.go", function (event) {
                return __awaiter(this, void 0, void 0, function* () {
                    let $btn = $(this);
                    $btn.prop("disabled", true);
                    let $r = $btn.closest("tr");
                    yield processRow_async($r);
                    $btn.prop("disabled", false);
                });
            });
        }
        $content.on("click", "input.moduleGo", function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                let $btn = $(this);
                $btn.prop("disabled", true);
                //debugger;
                let $tbl = $btn.data("tbl");
                yield processTable_async($tbl);
                $btn.prop("disabled", false);
            });
        });
        $allGoBtn.on("click", function (event) {
            return __awaiter(this, void 0, void 0, function* () {
                let $btn = $(this);
                $btn.prop("disabled", true);
                let $container = $btn.data("content");
                for (let tbl of $container.find("table.grid").get())
                    yield processTable_async($(tbl));
                $btn.prop("disabled", false);
            });
        });
        /** отработка 1 строки таблицы с запуском теста */
        function processRow_async($r) {
            return __awaiter(this, void 0, void 0, function* () {
                let testSymb = $r.data("key");
                let $tbl = $r.closest("table");
                let modSymb = $tbl.data("key");
                let [, tests] = nullCheck(TestSet.get(modSymb));
                let [, tfunc] = nullCheck(tests.get(testSymb));
                try {
                    $r.find("td.res").text("wait...");
                    //await sleep_async(5000);
                    yield tfunc();
                    $r.find("td.res").text("OK");
                }
                catch (err) {
                    console.log(err);
                    $r.find("td.res").text("Error");
                    //$r.find("td.error").text(`${err.name} => ${err.stack}`);
                    $r.find("td.error").text(`${err.name}`);
                }
            });
        }
        /** отработка 1 таблицы по факту 1 модуль */
        function processTable_async($tbl) {
            return __awaiter(this, void 0, void 0, function* () {
                $tbl.find("input.go").prop("disabled", true);
                $tbl.find("td.res").text("-");
                $tbl.find("td.error").text("-");
                let $rows = $tbl.find("tr.even,tr.odd");
                for (let tr of $tbl.find("tr.even,tr.odd").get())
                    yield processRow_async($(tr));
                $tbl.find("input.go").prop("disabled", false);
            });
        }
    });
}
$(document).ready(() => {
    if (document.domain == "localhost")
        testRun_async();
});

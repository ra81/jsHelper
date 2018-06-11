// 
// Набор вспомогательных функций для использования в других проектах. Универсальные
//   /// <reference path= "../../_jsHelper/jsHelper/jsHelper.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/*
Есть классы юнитов (unit_class или kind), они обладают общими свойствами и в целом интерфейсом. Отличаються могут оборудованием.
Легкие сервисы включают прачечные парикмахерские и так далее. Это типы юнитов. unit_type
В них есть специализации это уже produce_id

Классы юнитов переключаются кнопками на главной странице.
Типы юнитов можно выбирать уже из выпадающей менюшки возле кнопок.
*/
// список типов юнитов. берется по картинке в юните, или с класса i-farm, i-office в списках юнитов
var UnitTypes;
(function (UnitTypes) {
    UnitTypes[UnitTypes["unknown"] = 0] = "unknown";
    UnitTypes[UnitTypes["animalfarm"] = 1] = "animalfarm";
    UnitTypes[UnitTypes["farm"] = 2] = "farm";
    UnitTypes[UnitTypes["lab"] = 3] = "lab";
    UnitTypes[UnitTypes["mill"] = 4] = "mill";
    UnitTypes[UnitTypes["mine"] = 5] = "mine";
    UnitTypes[UnitTypes["office"] = 6] = "office";
    UnitTypes[UnitTypes["oilpump"] = 7] = "oilpump";
    UnitTypes[UnitTypes["orchard"] = 8] = "orchard";
    UnitTypes[UnitTypes["sawmill"] = 9] = "sawmill";
    UnitTypes[UnitTypes["shop"] = 10] = "shop";
    UnitTypes[UnitTypes["seaport"] = 11] = "seaport";
    UnitTypes[UnitTypes["warehouse"] = 12] = "warehouse";
    UnitTypes[UnitTypes["workshop"] = 13] = "workshop";
    UnitTypes[UnitTypes["villa"] = 14] = "villa";
    UnitTypes[UnitTypes["fishingbase"] = 15] = "fishingbase";
    UnitTypes[UnitTypes["service_light"] = 16] = "service_light";
    UnitTypes[UnitTypes["fitness"] = 17] = "fitness";
    UnitTypes[UnitTypes["laundry"] = 18] = "laundry";
    UnitTypes[UnitTypes["hairdressing"] = 19] = "hairdressing";
    UnitTypes[UnitTypes["medicine"] = 20] = "medicine";
    UnitTypes[UnitTypes["restaurant"] = 21] = "restaurant";
    UnitTypes[UnitTypes["power"] = 22] = "power";
    UnitTypes[UnitTypes["coal_power"] = 23] = "coal_power";
    UnitTypes[UnitTypes["incinerator_power"] = 24] = "incinerator_power";
    UnitTypes[UnitTypes["oil_power"] = 25] = "oil_power";
    UnitTypes[UnitTypes["sun_power"] = 26] = "sun_power";
    UnitTypes[UnitTypes["fuel"] = 27] = "fuel";
    UnitTypes[UnitTypes["repair"] = 28] = "repair";
    UnitTypes[UnitTypes["apiary"] = 29] = "apiary";
    UnitTypes[UnitTypes["educational"] = 30] = "educational";
    UnitTypes[UnitTypes["kindergarten"] = 31] = "kindergarten";
    UnitTypes[UnitTypes["network"] = 32] = "network";
    UnitTypes[UnitTypes["it"] = 33] = "it";
    UnitTypes[UnitTypes["cellular"] = 34] = "cellular";
})(UnitTypes || (UnitTypes = {}));
/*
все классы юнитов которые есть. По факту это кнопки на странице списка юнитов. Каждая кнопка - отдельный класс
забрать их можно со страницы https://virtonomica.ru/api/lien/main/unittype/browse
*/
var UnitClasses;
(function (UnitClasses) {
    UnitClasses[UnitClasses["unknown"] = -1] = "unknown";
    UnitClasses[UnitClasses["villa"] = 100] = "villa";
    UnitClasses[UnitClasses["workshop"] = 1814] = "workshop";
    UnitClasses[UnitClasses["office"] = 1815] = "office";
    UnitClasses[UnitClasses["mine"] = 1868] = "mine";
    UnitClasses[UnitClasses["shop"] = 1885] = "shop";
    UnitClasses[UnitClasses["warehouse"] = 2013] = "warehouse";
    UnitClasses[UnitClasses["animalfarm"] = 2043] = "animalfarm";
    UnitClasses[UnitClasses["mill"] = 2056] = "mill";
    UnitClasses[UnitClasses["sawmill"] = 2070] = "sawmill";
    UnitClasses[UnitClasses["farm"] = 2117] = "farm";
    UnitClasses[UnitClasses["lab"] = 2202] = "lab";
    UnitClasses[UnitClasses["orchard"] = 2377] = "orchard";
    UnitClasses[UnitClasses["seaport"] = 3473] = "seaport";
    UnitClasses[UnitClasses["fishingbase"] = 335145] = "fishingbase";
    UnitClasses[UnitClasses["service_light"] = 348193] = "service_light";
    UnitClasses[UnitClasses["medicine"] = 359822] = "medicine";
    UnitClasses[UnitClasses["restaurant"] = 373182] = "restaurant";
    UnitClasses[UnitClasses["power"] = 422107] = "power";
    UnitClasses[UnitClasses["fuel"] = 422789] = "fuel";
    UnitClasses[UnitClasses["repair"] = 422811] = "repair";
    UnitClasses[UnitClasses["it"] = 423353] = "it";
    UnitClasses[UnitClasses["educational"] = 423693] = "educational";
    UnitClasses[UnitClasses["network"] = 423768] = "network";
})(UnitClasses || (UnitClasses = {}));
// уровни сервиса
var ServiceLevels;
(function (ServiceLevels) {
    ServiceLevels[ServiceLevels["none"] = -1] = "none";
    ServiceLevels[ServiceLevels["lower"] = 0] = "lower";
    ServiceLevels[ServiceLevels["low"] = 1] = "low";
    ServiceLevels[ServiceLevels["normal"] = 2] = "normal";
    ServiceLevels[ServiceLevels["high"] = 3] = "high";
    ServiceLevels[ServiceLevels["higher"] = 4] = "higher";
    ServiceLevels[ServiceLevels["elite"] = 5] = "elite";
})(ServiceLevels || (ServiceLevels = {}));
function serviceFromStrOrError(str) {
    switch (str.toLowerCase()) {
        case "элитный":
            return ServiceLevels.elite;
        case "очень высокий":
            return ServiceLevels.higher;
        case "высокий":
            return ServiceLevels.high;
        case "нормальный":
            return ServiceLevels.normal;
        case "низкий":
            return ServiceLevels.low;
        case "очень низкий":
            return ServiceLevels.lower;
        case "не известен":
            return ServiceLevels.none;
        default:
            throw new Error("Не смог идентифицировать указанный уровень сервиса " + str);
    }
}
// индекс рынка
var MarketIndex;
(function (MarketIndex) {
    MarketIndex[MarketIndex["None"] = -1] = "None";
    MarketIndex[MarketIndex["E"] = 0] = "E";
    MarketIndex[MarketIndex["D"] = 1] = "D";
    MarketIndex[MarketIndex["C"] = 2] = "C";
    MarketIndex[MarketIndex["B"] = 3] = "B";
    MarketIndex[MarketIndex["A"] = 4] = "A";
    MarketIndex[MarketIndex["AA"] = 5] = "AA";
    MarketIndex[MarketIndex["AAA"] = 6] = "AAA";
})(MarketIndex || (MarketIndex = {}));
function mIndexFromString(str) {
    var index = MarketIndex.None;
    switch (str) {
        case "AAA":
            return MarketIndex.AAA;
        case "AA":
            return MarketIndex.AA;
        case "A":
            return MarketIndex.A;
        case "B":
            return MarketIndex.B;
        case "C":
            return MarketIndex.C;
        case "D":
            return MarketIndex.D;
        case "E":
            return MarketIndex.E;
        case "?":
        case "None":
            return MarketIndex.None;
        default:
            throw new Error("\u041D\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043D\u044B\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u0440\u044B\u043D\u043A\u0430: " + str);
    }
}
/**
 * Простенький конвертер, который из множества формирует массив значений множества. По факту массив чисел.
   используется внутреннее представление множеств и как бы может сломаться в будущем
 * @param enumType тип множества
 */
function enum2Arr(enumType) {
    var res = [];
    for (var key in enumType) {
        if (typeof enumType[key] === "number")
            res.push(enumType[key]);
    }
    return res;
}
/**
 * Простой счетчик. Увеличивается на 1 при каждом вызове метода Next. Нужен для подсчета числа запросов
 */
var Counter = /** @class */ (function () {
    function Counter() {
        var _this_1 = this;
        this.Next = function () {
            _this_1._count++;
        };
        this._count = 0;
    }
    ;
    Object.defineProperty(Counter.prototype, "Count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    return Counter;
}());
function keysN(dict) {
    return Object.keys(dict).map(function (k) { return parseInt(k); });
}
function keys(obj) {
    return Object.keys(obj);
}
function valuesN(dict) {
    var res = [];
    for (var key in dict)
        res.push(dict[key]);
    return res;
}
function values(dict) {
    var res = [];
    for (var key in dict)
        res.push(dict[key]);
    return res;
}
/**
 * Проверяет любой объект на наличие свойств видимых. Удобен для словарей.
 * Если словарь не задать, вывалит исключение
 * @param obj
 */
function isEmpty(obj) {
    if (obj == null)
        throw new Error("obj == null");
    return Object.keys(obj).length === 0;
}
/**
 * Конвертит словарь в простую текстовую строку вида "key:val, key1:val1"
 * значения в строку конвертятся штатным toString()
 * Создана чисто потому что в словарь нельзя засунуть методы.
 * @param dict
 */
function dict2String(dict) {
    if (isEmpty(dict))
        return "";
    var newItems = [];
    for (var key in dict)
        newItems.push(key + ":" + dict[key].toString());
    return newItems.join(", ");
}
/**
 * Фильтрует заданный словарь. Выбирает из него только те элементы которые проходят фильтр.
 * В любом раскладе возвращает пустой словарь
 * @param dict
 * @param selector
 */
function filterDictVal(dict, selector) {
    var res = {};
    for (var key in dict) {
        var item = dict[key];
        if (selector(item))
            res[key] = item;
    }
    return res;
}
/**
 * Склеивает два словаря вместе. Ключи не теряются, если есть одинаковые то вывалит ошибку
 * @param dict1
 * @param dict2
 */
function mergeDict(dict1, dict2) {
    if (dict1 == null || dict2 == null)
        throw new Error("аргументы не должны быть null");
    var res = {};
    for (var key in dict1)
        res[key] = dict1[key];
    for (var key in dict2) {
        if (res[key] != null)
            throw new Error("dict1 \u0443\u0436\u0435 \u0438\u043C\u0435\u0435\u0442 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043A\u043B\u044E\u0447 '" + key + "' \u043A\u0430\u043A \u0438 dict2");
        res[key] = dict2[key];
    }
    return res;
}
function mergeDictN(dict1, dict2) {
    if (dict1 == null || dict2 == null)
        throw new Error("аргументы не должны быть null");
    var res = {};
    for (var key in dict1)
        res[key] = dict1[key];
    for (var key in dict2) {
        if (res[key] != null)
            throw new Error("dict1 \u0443\u0436\u0435 \u0438\u043C\u0435\u0435\u0442 \u0442\u0430\u043A\u043E\u0439 \u0436\u0435 \u043A\u043B\u044E\u0447 '" + key + "' \u043A\u0430\u043A \u0438 dict2");
        res[key] = dict2[key];
    }
    return res;
}
/**
 * Проверяет что элемент есть в массиве.
 * @param item
 * @param arr массив НЕ null
 */
function isOneOf(item, arr) {
    if (arr.length <= 0)
        return false;
    return arr.indexOf(item) >= 0;
}
/**
 * Преобразует массив в словарь используя заданные селектор ключа.
 * @param arr
 * @param keySelector
 */
function toDictionaryN(arr, keySelector) {
    var res = {};
    if (!arr)
        throw new Error("arr null");
    if (!keySelector)
        throw new Error("keySelector null");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        var k = keySelector(el);
        if (!k)
            throw new Error("Ключ не может быть неопределен!");
        if (res[k])
            throw new Error("Обнаружено повторение ключа!");
        res[k] = el;
    }
    return res;
}
/**
 * Возвращает только уникальные значения массива. Для объектов идет сравнение ссылок, само содержимое не сравнивается
 * @param array
 */
function unique(array) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (array.indexOf(item) === i)
            res.push(item);
    }
    return res;
}
/**
 * Находит пересечение двух массивов. Объекты сравнивать будет по ссылкам. Дубли удаляются.
 * Возвращает массив уникальных значений имеющихся в обоих массивах
 * @param a
 * @param b
 */
function intersect(a, b) {
    // чтобы быстрее бегал indexOf в A кладем более длинный массив
    if (b.length > a.length) {
        var t = b;
        b = a;
        a = t;
    }
    // находим пересечение с дублями
    var intersect = [];
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var item = a_1[_i];
        if (b.indexOf(item) >= 0)
            intersect.push(item);
    }
    // если надо удалить дубли, удаляем
    return unique(intersect);
}
// NUMBER ------------------------------------------
/**
 * round до заданного числа знаков. Может дать погрешность на округлении но похрен
 * @param n
 * @param decimals
 */
function roundTo(n, decimals) {
    if (isNaN(n) || isNaN(decimals))
        throw new Error("\u0447\u0438\u0441\u043B\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u044B. n:" + n + ", decimals:" + decimals);
    if (decimals < 0)
        throw new Error("decimals: " + decimals + " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 0");
    decimals = Math.round(decimals); // делаем ставку на косяки округления откуда может прилететь 1.00000001
    var f = Math.pow(10, decimals);
    return Math.round(n * f) / f;
}
/**
 * floor до заданного числа знаков. Может дать погрешность если будет число вида x.99999999999
   так как при расчетах прибавляет 1е-10. Но это очень редкий случай когда округлит вверх
 * @param n
 * @param decimals
 */
function floorTo(n, decimals) {
    if (isNaN(n) || isNaN(decimals))
        throw new Error("\u0447\u0438\u0441\u043B\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u044B. n:" + n + ", decimals:" + decimals);
    if (decimals < 0)
        throw new Error("decimals: " + decimals + " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 0");
    decimals = Math.round(decimals); // делаем ставку на косяки округления откуда может прилететь 1.00000001
    var f = Math.pow(10, decimals);
    return Math.floor(n * f + 1e-10) / f;
}
/**
 * ceil до заданного числа знаков. Может дать погрешность если будет число вида x.00000000000001
   так как при расчетах вычитает 1е-10. Но это очень редкий случай когда округлит вверх
 * @param n
 * @param decimals
 */
function ceilTo(n, decimals) {
    if (isNaN(n) || isNaN(decimals))
        throw new Error("\u0447\u0438\u0441\u043B\u0430 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u044B. n:" + n + ", decimals:" + decimals);
    if (decimals < 0)
        throw new Error("decimals: " + decimals + " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 0");
    decimals = Math.round(decimals); // делаем ставку на косяки округления откуда может прилететь 1.00000001
    var f = Math.pow(10, decimals);
    return Math.ceil(n * f - 1e-10) / f;
}
// PARSE -------------------------------------------
/**
 * удаляет из строки все денежные и специальные символы типо процента и пробелы между цифрами
 * @param str
 */
function cleanStr(str) {
    return str.replace(/[\s\$\%\©]/g, "");
}
/**
 * Выдергивает реалм из текущего href ссылки если это возможно.
 */
function getRealm() {
    // https://*virtonomic*.*/*/main/globalreport/marketing/by_trade_at_cities/*
    // https://*virtonomic*.*/*/window/globalreport/marketing/by_trade_at_cities/*
    var rx = new RegExp(/https:\/\/virtonomic[A-Za-z]+\.[a-zA-Z]+\/([a-zA-Z]+)\/.+/ig);
    var m = rx.exec(document.location.href);
    if (m == null)
        return null;
    return m[1];
}
function getRealmOrError() {
    var realm = getRealm();
    if (realm === null)
        throw new Error("Не смог определить реалм по ссылке " + document.location.href);
    return realm;
}
/**
 * Парсит id компании со страницы. Если не получилось то вернет null
 */
function parseCompanyId(html) {
    var $html = $(html);
    var href = $html.find("a.dashboard").attr("href");
    if (href == null || href.length <= 0)
        return null;
    var arr = href.match(/\d+/);
    if (arr == null || arr.length !== 1)
        return null;
    return numberfyOrError(arr[0]);
}
/**
 * Оцифровывает строку. Возвращает всегда либо число или Number.POSITIVE_INFINITY либо -1 если str не содержит числа.
 * @param variable любая строка.
 */
function numberfy(str) {
    // возвращает либо число полученно из строки, либо БЕСКОНЕЧНОСТЬ, либо -1 если не получилось преобразовать.
    if (String(str) === 'Не огр.' ||
        String(str) === 'Unlim.' ||
        String(str) === 'Не обм.' ||
        String(str) === 'N’est pas limité' ||
        String(str) === 'No limitado' ||
        String(str) === '无限' ||
        String(str) === 'Nicht beschr.') {
        return Number.POSITIVE_INFINITY;
    }
    else {
        // если str будет undef null или что то страшное, то String() превратит в строку после чего парсинг даст NaN
        // не будет эксепшнов
        var n = parseFloat(cleanStr(String(str)));
        return isNaN(n) ? -1 : n;
    }
}
/**
 * Пробуем оцифровать данные но если они выходят как Number.POSITIVE_INFINITY или <= minVal, валит ошибку.
   смысл в быстром вываливании ошибки если парсинг текста должен дать число
   Нужно понимать что если оцифровка не удалась, то получится -1 и при minVal=0 выдаст ошибку конечно
 * @param value строка являющая собой число больше minVal
 * @param minVal ограничение снизу. Число.
 * @param infinity разрешена ли бесконечность
 * @param minInclude если включен то мин граница разрешается, иначе НЕ разрешается
 */
function numberfyOrError(str, minVal, infinity, minInclude) {
    if (minVal === void 0) { minVal = 0; }
    if (infinity === void 0) { infinity = false; }
    if (minInclude === void 0) { minInclude = false; }
    var n = numberfy(str);
    if (!infinity && (n === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY))
        throw new RangeError("Получили бесконечность, что запрещено.");
    if (minInclude && n < minVal)
        throw new RangeError("\u0427\u0438\u0441\u043B\u043E " + n + " \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C >= " + minVal);
    if (!minInclude && n <= minVal)
        throw new RangeError("\u0427\u0438\u0441\u043B\u043E " + n + " \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C > " + minVal);
    return n;
}
/**
 * Ищет паттерн в строке. Предполагая что паттерн там обязательно есть 1 раз. Если
 * нет или случился больше раз, валим ошибку
 * @param str строка в которой ищем
 * @param rx паттерн который ищем
 */
function matchedOrError(str, rx, errMsg) {
    var m = str.match(rx);
    if (m == null)
        throw new Error(errMsg || "\u041F\u0430\u0442\u0442\u0435\u0440\u043D " + rx + " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 " + str);
    if (m.length > 1)
        throw new Error(errMsg || "\u041F\u0430\u0442\u0442\u0435\u0440\u043D " + rx + " \u043D\u0430\u0439\u0434\u0435\u043D \u0432 " + str + " " + m.length + " \u0440\u0430\u0437 \u0432\u043C\u0435\u0441\u0442\u043E \u043E\u0436\u0438\u0434\u0430\u0435\u043C\u043E\u0433\u043E 1");
    return m[0];
}
/**
 * Пробуем прогнать регулярное выражение на строку, если не прошло, то вывалит ошибку.
 * иначе вернет массив. 0 элемент это найденная подстрока, остальные это найденные группы ()
 * @param str
 * @param rx
 * @param errMsg
 */
function execOrError(str, rx, errMsg) {
    var m = rx.exec(str);
    if (m == null)
        throw new Error(errMsg || "\u041F\u0430\u0442\u0442\u0435\u0440\u043D " + rx + " \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0432 " + str);
    return m;
}
/**
 * из строки пробует извлечь все вещественные числа. Рекомендуется применять ТОЛЬКО для извлечения из текстовых строк.
 * для простого парсинга числа пойдет numberfy
 * Если их нет вернет null
 * @param str
 */
function extractFloatPositive(str) {
    var m = cleanStr(str).match(/\d+\.\d+/ig);
    if (m == null)
        return null;
    var n = m.map(function (val, i, arr) { return numberfyOrError(val, -1); });
    return n;
}
/**
 * из указанной строки, извлекает числа. обычно это id юнита товара и так далее
 * @param str
 */
function extractIntPositive(str) {
    var m = cleanStr(str).match(/\d+/ig);
    if (m == null)
        return null;
    var n = m.map(function (val, i, arr) { return numberfyOrError(val, -1); });
    return n;
}
/**
 * Для заданного пути до файла извлекает имя файла и возвращает Имя и Расширения в таком же порядке.
 * @param fileUrl /img/products/brand/krakow.gif линк вроде такого
 */
function extractFile(fileUrl) {
    var items = fileUrl.split("/");
    if (items.length < 2)
        throw new Error("\u041E\u0447\u0435\u0432\u0438\u0434\u043D\u043E \u0447\u0442\u043E " + fileUrl + " \u043D\u0435 \u0441\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0444\u0430\u0439\u043B");
    var file = items[items.length - 1];
    var _a = file.split("."), symbol = _a[0], ext = _a[1]; // если нет расширения то будет undef во втором
    ext = ext == null ? "" : ext;
    if (symbol.length <= 0)
        throw new Error("\u041D\u0443\u043B\u0435\u0432\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u0438\u043C\u0435\u043D\u0438 \u0444\u0430\u0439\u043B\u0432 \u0432 " + fileUrl);
    return [symbol, ext];
}
/**
 * По текстовой строке возвращает номер месяца начиная с 0 для января. Либо null
 * @param str очищенная от пробелов и лишних символов строка
 */
function monthFromStr(str) {
    var mnth = ["январ", "феврал", "март", "апрел", "ма", "июн", "июл", "август", "сентябр", "октябр", "ноябр", "декабр"];
    for (var i = 0; i < mnth.length; i++) {
        if (str.indexOf(mnth[i]) === 0)
            return i;
    }
    return null;
}
/**
 * По типовой игровой строке даты вида 10 января 55 г., 3 февраля 2017 - 22.10.12
 * выдергивает именно дату и возвращает в виде объекта даты
 * @param str
 */
function extractDate(str) {
    var dateRx = /^(\d{1,2})\s+([а-я]+)\s+(\d{1,4})/i;
    var m = dateRx.exec(str);
    if (m == null)
        return null;
    var d = parseInt(m[1]);
    var mon = monthFromStr(m[2]);
    if (mon == null)
        return null;
    var y = parseInt(m[3]);
    return new Date(y, mon, d);
}
function extractDateOrError(str) {
    var dt = extractDate(str);
    if (dt == null)
        throw new Error("\u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C \u0438\u0437\u0432\u043B\u0435\u0447\u044C \u0434\u0430\u0442\u0443 \u0438\u0437 \"" + str + "\"");
    return dt;
}
/**
 * из даты формирует короткую строку типа 01.12.2017
 * @param date
 */
function dateToShort(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1;
    var yyyy = date.getFullYear();
    var dStr = d < 10 ? "0" + d : d.toString();
    var mStr = m < 10 ? "0" + m : m.toString();
    return dStr + "." + mStr + "." + yyyy;
}
/**
 * из строки вида 01.12.2017 формирует дату
 * @param str
 */
function dateFromShort(str) {
    var items = str.split(".");
    var d = parseInt(items[0]);
    if (d <= 0)
        throw new Error("дата неправильная.");
    var m = parseInt(items[1]) - 1;
    if (m < 0)
        throw new Error("месяц неправильная.");
    var y = parseInt(items[2]);
    if (y < 0)
        throw new Error("год неправильная.");
    return new Date(y, m, d);
}
/**
 * По заданному числу возвращает число с разделителями пробелами для удобства чтения
 * @param num
 */
function sayNumber(num) {
    if (num < 0)
        return "-" + sayNumber(-num);
    if (Math.round(num * 100) / 100 - Math.round(num))
        num = Math.round(num * 100) / 100;
    else
        num = Math.round(num);
    var s = num.toString();
    var s1 = "";
    var l = s.length;
    var p = s.indexOf(".");
    if (p > -1) {
        s1 = s.substr(p);
        l = p;
    }
    else {
        p = s.indexOf(",");
        if (p > -1) {
            s1 = s.substr(p);
            l = p;
        }
    }
    p = l - 3;
    while (p >= 0) {
        s1 = ' ' + s.substr(p, 3) + s1;
        p -= 3;
    }
    if (p > -3) {
        s1 = s.substr(0, 3 + p) + s1;
    }
    if (s1.substr(0, 1) == " ") {
        s1 = s1.substr(1);
    }
    return s1;
}
/**
 * Для денег подставляет нужный символ при выводе на экран. Округляет до 2 знаков,
   так же вставляет пробелы как разделитель для тысяч
 * @param num
 * @param symbol
 */
function sayMoney(num, symbol) {
    if (symbol === void 0) { symbol = "$"; }
    var result = sayNumber(num);
    if (symbol != null) {
        if (num < 0)
            result = '-' + symbol + sayNumber(Math.abs(num));
        else
            result = symbol + result;
    }
    return result;
}
/**
 * Форматирует строки в соответствии с форматом в C#. Плейсхолдеры {0}, {1} заменяет на аргументы.
   если аргумента НЕТ а плейсхолдер есть, вывалит исключение, как и в сишарпе.
 * @param str шаблон строки
 * @param args аргументы которые подставить
 */
function formatStr(str) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var res = str.replace(/{(\d+)}/g, function (match, number) {
        if (args[number] == null)
            throw new Error("\u043F\u043B\u0435\u0439\u0441\u0445\u043E\u043B\u0434\u0435\u0440 " + number + " \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F");
        return args[number];
    });
    return res;
}
/**
 * Если значение null|undefined то вывалит ошибку, иначе вернет само значение.
   Короткий метод для проверок на нулл
 * @param val
 */
function nullCheck(val) {
    if (val == null)
        throw new Error("nullCheck Error");
    return val;
}
/** проверяет чтобы value было стопудово числом а не другой хуйней */
function numberCheck(value) {
    if (isNaN(value) || value == Infinity || typeof (value) != "number")
        throw new Error(value + " \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0447\u0438\u0441\u043B\u043E\u043C.");
    return value;
}
/** проверяет чтобы value было стопудово строкой а не другой хуйней */
function stringCheck(value) {
    if (typeof (value) != "string")
        throw new Error(value + " \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u043E\u0439.");
    return value;
}
/**
 * Спать потоку заданное число миллисекунд. Асинхронная!!
 * @param ms
 */
function sleep_async(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
var commonUrls = {
    /** все поставщики товара в виртономике глобально [реалм, айди товара] */
    virt_product_suppliers: {
        tpl: "/{0}/main/globalreport/marketing/by_products/{1}/",
        rx: /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_products\/\d+\/?$/i
    },
    /** розничный отчет по городу для товара [реалм,pid,countryID, regionID, cityID]*/
    virt_city_retail_report: {
        tpl: "/{0}/window/globalreport/marketing/by_trade_at_cities/{1}/{2}/{3}/{4}",
        rx: /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_trade_at_cities\/\d+/i,
    },
    /** общий список всех типов предприятий в игре [реалм]*/
    virt_unit_types_api: {
        tpl: "/api/{0}/main/unittype/browse",
    },
    /** спецухи данного типа предприятия и их характеристики [реалм, айди типа] */
    virt_type_spec_api: {
        tpl: "/api/{0}/main/unittype/produce?id={1}",
    },
    /** список всех розничных продуктов с отделами [реалм]*/
    virt_retail_products_api: {
        tpl: "/api/{0}/main/product/goods",
    },
    /** список всех городов реалма [реалм]*/
    virt_cities_api: {
        tpl: "/api/{0}/main/geo/city/browse",
    },
    /** список всех регионов реалма [реалм]*/
    virt_regions_api: {
        tpl: "/api/{0}/main/geo/region/browse",
    },
    /** список всех стран реалма [реалм]*/
    virt_countries_api: {
        tpl: "/api/{0}/main/geo/country/browse",
    },
    /** список юнитов. [Реалм, АйдиКонторы] */
    comp_unit_list: {
        tpl: "/{0}/window/company/view/{1}/unit_list",
        rx: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+(\/unit_list)?(\/xiooverview|\/overview)?$/i,
    },
    /** удалить свой контракт в магазине, складе заводе и т.д [Реалм] */
    unit_ajax_deleteContract: {
        tpl: "/{0}/ajax/unit/supply/delete",
    },
    /** создать новый контракт в магазине складе заводе итд [Реалм]*/
    unit_ajax_createContract: {
        tlp: "/{0}/ajax/unit/supply/create",
    },
    /** пагинатор Аналитика - Продукция [реалм, pagesize]*/
    pager_virt_product_suppliers: {
        tlp: "/{0}/main/common/util/setpaging/reportcompany/marketingProduct/{1}",
    }
};
var Url_rx = {
    // для виртономики
    v_city_retail_report: /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_trade_at_cities\/\d+/i,
    v_tm_info: /\/[a-z]+\/(?:main|window)\/globalreport\/tm\/info\/?$/i,
    v_franchise_info: /\/[a-z]+\/(?:main|window)\/franchise_market\/list\/?$/i,
    v_country_duties: /\/[a-z]+\/(?:main|window)\/geo\/countrydutylist\/\d+\/?/i,
    v_regions: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/bonuses\/region\/?$/i,
    v_countries: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/bonuses\/country\/?$/i,
    v_cities: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/bonuses\/city\/?$/i,
    v_products_size: /\/[a-z]+\/(?:main|window)\/industry\/unit_type\/info\/2011\/volume\/?/i,
    v_media_rep_spec: /\/[a-z]+\/(?:main|window)\/mediareport\/\d+/i,
    v_global_products: /[a-z]+\/main\/globalreport\/marketing\/by_products\/\d+\/?$/i,
    v_products: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/products$/i,
    v_trade_products: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/trading$/i,
    v_energy_price: /\/[a-z]+\/(?:main|window)\/geo\/tariff\/\d+/i,
    v_product_suppliers: /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_products\/\d+\/?$/i,
    // для компании в целом
    top_manager: /\/[a-z]+\/(?:main|window)\/user\/privat\/persondata\/knowledge\/?$/ig,
    comp_ads_rep: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+\/marketing_report\/by_advertising_program\/?$/i,
    comp_fin_rep_byunit: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+\/finance_report\/by_units(?:\/.*)?$/i,
    comp_unit_list: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+(\/unit_list)?(\/xiooverview|\/overview)?$/i,
    // групповое управление
    comp_manage_salary: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+\/unit_list\/employee\/salary\/?$/i,
    comp_manage_equipment: /\/[a-z]+\/window\/management_units\/equipment\/(?:buy|repair)\/?$/i,
    // для юнита
    unit_any: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+/i,
    unit_main: /\/[a-z]+\/main\/unit\/view\/\d+\/?$/i,
    unit_ads: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/virtasement\/?$/i,
    unit_salary: /\/[a-z]+\/window\/unit\/employees\/engage\/\d+\/?$/ig,
    unit_sale: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/sale\/?/i,
    unit_supply: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/supply\/?/i,
    unit_supply_create: /\/[a-z]+\/unit\/supply\/create\/\d+\/step2\/?$/i,
    unit_trade_hall: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/trading_hall\/?/i,
    unit_retail_price_history: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/product_history\/\d+\/?/i,
    unit_education: /\/[a-z]+\/window\/unit\/employees\/education\/\d+\/?/i,
    unit_ware_resize: /\/[a-z]+\/window\/unit\/upgrade\/\d+\/?$/i,
    unit_ware_change_spec: /\/[a-z]+\/window\/unit\/speciality_change\/\d+\/?$/i,
    unit_finrep: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/finans_report(\/graphical)?$/i,
    unit_finrep_by_prod: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/finans_report\/by_production\/?$/i,
    unit_equipment: /\/[a-z]+\/window\/unit\/equipment\/\d+\/?$/ig,
};
var UrlApi_rx = {
    // для виртономики
    trade_products: /api\/[a-z]+\/main\/product\/goods$/i,
    cities: /api\/[a-z]+\/main\/geo\/city\/browse$/i,
    regions: /api\/[a-z]+\/main\/geo\/region\/browse$/i,
    retail_products: /api\/[a-z]+\/main\/product\/goods$/i,
    // для юнита
    unit_summary: /api\/[a-z]+\/main\/unit\/summary$/i,
    unit_sale_contracts: /api\/[a-z]+\/main\/unit\/sale\/contracts$/i,
    unit_supply_contracts: /api\/[a-z]+\/main\/unit\/supply\/contracts$/i,
    // для компании в целом
    comp_unit_list: /api\/[a-z]+\/main\/company\/units$/i,
};
var Url_tpl = {
//// компания в целом
//comp_unit_list: `/{0}/window/company/view/{1}/unit_list`, // список юнитов. Реалм, АйдиКонторы
//// юнит
//ajax_deleteContract: `/{0}/ajax/unit/supply/delete`,       // удалить СВОЙ контракт в магазине, складе, заводе итд
//ajax_createContract: `/{0}/ajax/unit/supply/create`,
//// глобальные виртовские
//v_glob_suppliers: `/{0}/main/globalreport/marketing/by_products/{1}/`,     // поставщики для товара. Глобально
//// пагинаторы
//setPaging_marketingProd: `/{0}/main/common/util/setpaging/reportcompany/marketingProduct/20000`, // Аналитика - Продукция  
};
var UrlApi_tpl = {
    // компания в целом main/company/units?id=3948072&pagesize=20000
    comp_unit_list: "/api/{0}/main/company/units?id={1}&pagesize={2}",
    // юнит
    unit_saleContracts: "/api/{0}/main/unit/sale/contracts?id={1}",
    unit_supply_contracts: "/api/{0}/main/unit/supply/contracts?id={1}",
    // глобальные виртовские
    tradeGoods: "/api/{0}/main/product/goods",
    cities: "/api/{0}/main/geo/city/browse",
    regions: "/api/{0}/main/geo/region/browse",
    retail_products: "/api/{0}/main/product/goods",
};
/**
 * По заданной ссылке и хтмл определяет находимся ли мы внутри юнита или нет.
 * Если на задавать ссылку и хтмл то берет текущий документ.
 * Вызов без параметров приводит к определению находимся ли мы своем юните сейчас
 * @param urlPath
 * @param $html
 * @param my своя компания или нет?
 */
function isUnit(urlPath, $html, my) {
    if (my === void 0) { my = true; }
    if (!urlPath || !$html) {
        urlPath = document.location.pathname;
        $html = $(document);
    }
    // для ситуации когда мы внутри юнита характерно что всегда ссылка вида 
    // https://virtonomica.ru/olga/main/unit/view/6452212/*
    var urlOk = Url_rx.unit_any.test(urlPath);
    if (!urlOk)
        return false;
    // но у своего юнита есть слева в табах стрелочка со ссылью на компанию с тем же айди что и ссыль на дашборду. А для чужого нет ее и табов
    var urlCompany = nullCheck($html.find("a[data-name='itour-tab-company-view'").attr("href"));
    //let urlOffice = $html.find("div.officePlace a").attr("href");
    var urlDash = nullCheck($html.find("a.dashboard").attr("href"));
    if (urlCompany.length === 0 || urlDash.length === 0)
        throw new Error("Ссылка на юзерлист или дашборду не может быть найдена");
    var isMy = (urlCompany + "/dashboard" === urlDash);
    return my ? isMy : !isMy;
}
function isUnitOld(urlPath, $html, my) {
    if (my === void 0) { my = true; }
    if (!urlPath || !$html) {
        urlPath = document.location.pathname;
        $html = $(document);
    }
    // для ситуации когда мы внутри юнита характерно что всегда ссылка вида 
    // https://virtonomica.ru/olga/main/unit/view/6452212/*
    var urlOk = Url_rx.unit_any.test(urlPath);
    if (!urlOk)
        return false;
    // но у своего юнита ссыль на офис имеет тот же айди что и ссыль на дашборду. А для чужого нет
    var urlOffice = $html.find("div.officePlace a").attr("href");
    var urlDash = $html.find("a.dashboard").attr("href");
    if (urlOffice.length === 0 || urlDash.length === 0)
        throw new Error("Ссылка на офис или дашборду не может быть найдена");
    var isMy = (urlOffice + "/dashboard" === urlDash);
    return my ? isMy : !isMy;
}
/**
 * Проверяет что мы именно на своей странице со списком юнитов. По ссылке и id компании
 * Проверок по контенту не проводит.
 */
function isMyUnitList() {
    // для своих и чужих компани ссылка одна, поэтому проверяется и id
    if (Url_rx.comp_unit_list.test(document.location.pathname) === false)
        return false;
    // запрос id может вернуть ошибку если мы на window ссылке. значит точно у чужого васи
    try {
        var id = nullCheck(parseCompanyId(document));
        var urlId = extractIntPositive(document.location.pathname); // полюбому число есть иначе регекс не пройдет
        if (urlId[0] != id)
            return false;
    }
    catch (err) {
        return false;
    }
    return true;
}
/**
 * Проверяет что мы именно на чужой!! странице со списком юнитов. По ссылке.
 * Проверок по контенту не проводит.
 */
function isOthersUnitList() {
    // для своих и чужих компани ссылка одна, поэтому проверяется и id
    if (Url_rx.comp_unit_list.test(document.location.pathname) === false)
        return false;
    try {
        // для чужого списка будет разный айди в дашборде и в ссылке
        var id = nullCheck(parseCompanyId(document));
        var urlId = extractIntPositive(document.location.pathname); // полюбому число есть иначе регекс не пройдет
        if (urlId[0] === id)
            return false;
    }
    catch (err) {
        // походу мы на чужом window списке. значит ок
        return true;
    }
    return true;
}
function isUnitMain(urlPath, html, my) {
    if (my === void 0) { my = true; }
    var ok = Url_rx.unit_main.test(urlPath);
    if (!ok)
        return false;
    var hasTabs = $(html).find("ul.tabu").length > 0;
    if (my)
        return hasTabs;
    else
        return !hasTabs;
}
//function isOthersUnitMain() {
//    // проверим линк и затем наличие табулятора. Если он есть то свой юнит, иначе чужой
//    let ok = url_unit_main_rx.test(document.location.pathname);
//    if (ok)
//        ok = $("ul.tabu").length === 0;
//    return ok;
//}
function isUnitFinanceReport() {
    return Url_rx.unit_finrep.test(document.location.pathname);
}
function isCompanyRepByUnit() {
    return Url_rx.comp_fin_rep_byunit.test(document.location.pathname);
}
function hasTradeHall(html, my) {
    if (my === void 0) { my = true; }
    var $html = $(html);
    if (my) {
        var $a = $html.find("ul.tabu a[href$=trading_hall]");
        if ($a.length > 1)
            throw new Error("Найдено больше одной ссылки на трейдхолл.");
        return $a.length === 1;
    }
    else
        return false;
}
// let url_visitors_history_rx = /\/[a-z]+\/main\/unit\/view\/\d+\/visitors_history\/?/i;
//function isVisitorsHistory() {
//    return url_visitors_history_rx.test(document.location.pathname);
//}
// JQUERY ----------------------------------------
/**
 * Возвращает ближайшего родителя по имени Тэга
   работает как и closest. Если родитель не найден то не возвращает ничего для данного элемента
    то есть есть шанс что было 10 а родителей нашли 4 и их вернули.
 * @param items набор элементов JQuery
 * @param tagname имя тэга. tr, td, span и так далее
 */
function closestByTagName(items, tagname) {
    var tag = tagname.toUpperCase();
    var found = [];
    for (var i = 0; i < items.length; i++) {
        var node = items[i];
        while ((node = node.parentNode) && node.nodeName != tag) { }
        ;
        if (node)
            found.push(node);
    }
    return $(found);
}
/**
 * Для заданного элемента, находит все непосредственно расположенные в нем текстовые ноды и возвращает их текст.
   очень удобен для извлечения непосредственного текста из тэга БЕЗ текста дочерних нодов
 * @param item 1 объект типа JQuery
 */
function getOnlyText(item) {
    // просто children() не отдает текстовые ноды.
    var $childrenNodes = item.contents();
    var res = [];
    for (var i = 0; i < $childrenNodes.length; i++) {
        var el = $childrenNodes.get(i);
        if (el.nodeType === 3)
            res.push($(el).text()); // так как в разных браузерах текст запрашивается по разному, 
        // универсальный способ запросить через jquery
    }
    return res;
}
/**
 * Пробует найти ровно 1 элемент для заданного селектора. если не нашло или нашло больше валит ошибку
 * @param $item
 * @param selector
 */
function oneOrError($item, selector) {
    var $one = $item.find(selector);
    if ($one.length != 1)
        throw new Error("\u041D\u0430\u0439\u0434\u0435\u043D\u043E " + $one.length + " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u0432\u043C\u0435\u0441\u0442\u043E 1 \u0434\u043B\u044F \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u0430 " + selector);
    return $one;
}
// AJAX ----------------------------------------
/**
 * Отправляет запрос на установку нужной пагинации. Возвращает promice дальше делай с ним что надо.
 */
function doRepage(pages, $html) {
    if (1)
        throw new Error("поправить надо функцию. криво работала");
    // если не задать данные страницы, то считаем что надо использовать текущую
    //if ($html == null)
    //    $html = $(document);
    //// снизу всегда несколько кнопок для числа страниц, НО одна может быть уже нажата мы не знаем какая
    //// берем просто любую ненажатую, извлекаем ее текст, на у далее в ссылке всегда
    //// есть число такое же как текст в кнопке. Заменяем на свое и все ок.
    //let $pager = $html.find('ul.pager_options li').has("a").last();
    //let num = $pager.text().trim();
    //let pagerUrl = $pager.find('a').attr('href').replace(num, pages.toString());
    //// запросили обновление пагинации, дальше юзер решает что ему делать с этим
    //let deffered = $.Deferred();
    //$.get(pagerUrl)
    //    .done((data, status, jqXHR) => deffered.resolve(data))
    //    .fail((err) => deffered.reject("Не удалось установить пагинацию => " + err));
    // return deffered.promise();
    return null;
}
/**
 * Запрашивает страницу. При ошибке поробует повторить запрос через заданное число секунд.
 * Пробует заданное число попыток, после чего возвращает reject.
 * При ресолве вернет текст страницы, а при реджекте вернет Error объект
 * @param url
 * @param retries число попыток загрузки
 * @param timeout таймаут между попытками
 * @param beforeGet вызывается перед каждым новым запросом. То есть число вызовов равно числу запросов. Каждый раз вызывается с урлом которые запрашивается.
 */
function tryGet_async(url, retries, timeout, beforeGet, onError) {
    if (retries === void 0) { retries = 10; }
    if (timeout === void 0) { timeout = 1000; }
    return __awaiter(this, void 0, void 0, function () {
        var $deffered;
        return __generator(this, function (_a) {
            $deffered = $.Deferred();
            if (beforeGet) {
                try {
                    beforeGet(url);
                }
                catch (err) {
                    logDebug("beforeGet вызвал исключение", err);
                }
            }
            $.ajax({
                url: url,
                type: "GET",
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) { return $deffered.resolve(data); },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (onError) {
                        try {
                            onError(url);
                        }
                        catch (err) {
                            logDebug("onError вызвал исключение", err);
                        }
                    }
                    retries--;
                    if (retries <= 0) {
                        var err = new Error("can't get " + this.url + "\nstatus: " + jqXHR.status + "\ntextStatus: " + jqXHR.statusText + "\nerror: " + errorThrown);
                        $deffered.reject(err);
                        return;
                    }
                    //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
                    var _this = this;
                    setTimeout(function () {
                        if (beforeGet) {
                            try {
                                beforeGet(url);
                            }
                            catch (err) {
                                logDebug("beforeGet вызвал исключение", err);
                            }
                        }
                        $.ajax(_this);
                    }, timeout);
                }
            });
            return [2 /*return*/, $deffered.promise()];
        });
    });
}
/**
 * Берет строку JSON и конвертает поля в данные. Числа в числа, null в нулл, и t/f в true/false
 * @param jsonStr
 */
function parseJSON(jsonStr) {
    var obj = JSON.parse(jsonStr, function (k, v) {
        if (v === "t")
            return true;
        if (v === "f")
            return false;
        return (typeof v === "object" || isNaN(v)) ? v : parseFloat(v);
    });
    return obj;
}
/**
 * Аналогично обычному методу tryGet_async правда ожидает только json и конвертает по ходу дела числа в числа если они идут строкой
 */
function tryGetJSON_async(url, retries, timeout, beforeGet, onError) {
    if (retries === void 0) { retries = 10; }
    if (timeout === void 0) { timeout = 1000; }
    return __awaiter(this, void 0, void 0, function () {
        var $deffered;
        return __generator(this, function (_a) {
            $deffered = $.Deferred();
            if (beforeGet) {
                try {
                    beforeGet(url);
                }
                catch (err) {
                    logDebug("beforeGet вызвал исключение", err);
                }
            }
            $.ajax({
                url: url,
                type: "GET",
                cache: false,
                dataType: "text",
                xhrFields: { withCredentials: true },
                success: function (jsonStr, status, jqXHR) {
                    var obj = parseJSON(jsonStr);
                    $deffered.resolve(obj);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (onError) {
                        try {
                            onError(url);
                        }
                        catch (err) {
                            logDebug("onError вызвал исключение", err);
                        }
                    }
                    retries--;
                    if (retries <= 0) {
                        var err = new Error("can't get " + this.url + "\nstatus: " + jqXHR.status + "\ntextStatus: " + jqXHR.statusText + "\nerror: " + errorThrown);
                        $deffered.reject(err);
                        return;
                    }
                    //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
                    var _this = this;
                    setTimeout(function () {
                        if (beforeGet) {
                            try {
                                beforeGet(url);
                            }
                            catch (err) {
                                logDebug("beforeGet вызвал исключение", err);
                            }
                        }
                        $.ajax(_this);
                    }, timeout);
                }
            });
            return [2 /*return*/, $deffered.promise()];
        });
    });
}
/**
 * Отправляет данные на сервер запросом POST. В остальном работает как и гет.
   Так же вернет промис который ресолвит с возвращенными данными
   Ожидает назад любые данные, автоматом определит. Для JSON лучше юзать метод tryPostJSON_async где четко указано что ждать
 * @param url
 * @param form данные для отправки на сервер
 * @param retries
 * @param timeout
 * @param beforePost
 */
function tryPost_async(url, form, retries, timeout, beforePost, onError) {
    if (retries === void 0) { retries = 10; }
    if (timeout === void 0) { timeout = 1000; }
    return __awaiter(this, void 0, void 0, function () {
        var $deferred;
        return __generator(this, function (_a) {
            $deferred = $.Deferred();
            if (beforePost) {
                try {
                    beforePost(url);
                }
                catch (err) {
                    logDebug("beforePost вызвал исключение", err);
                }
            }
            $.ajax({
                url: url,
                data: form,
                type: "POST",
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) { return $deferred.resolve(data); },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (onError) {
                        try {
                            onError(url);
                        }
                        catch (err) {
                            logDebug("onError вызвал исключение", err);
                        }
                    }
                    retries--;
                    if (retries <= 0) {
                        var err = new Error("can't post " + this.url + "\nstatus: " + jqXHR.status + "\ntextStatus: " + jqXHR.statusText + "\nerror: " + errorThrown);
                        $deferred.reject(err);
                        return;
                    }
                    //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
                    var _this = this;
                    setTimeout(function () {
                        if (beforePost) {
                            try {
                                beforePost(url);
                            }
                            catch (err) {
                                logDebug("beforePost вызвал исключение", err);
                            }
                        }
                        $.ajax(_this);
                    }, timeout);
                }
            });
            return [2 /*return*/, $deferred.promise()];
        });
    });
}
/**
 * Отправляет данные на сервер запросом POST. В остальном работает как и гет.
   Так же вернет промис который ресолвит с возвращенными данными
   Ожидает назад JSON данные
 * @param url
 * @param data данные для отправки на сервер
 * @param retries
 * @param timeout
 * @param beforePost
 */
function tryPostJSON_async(url, data, retries, timeout, beforePost, onError) {
    if (retries === void 0) { retries = 10; }
    if (timeout === void 0) { timeout = 1000; }
    return __awaiter(this, void 0, void 0, function () {
        var $deferred;
        return __generator(this, function (_a) {
            $deferred = $.Deferred();
            if (beforePost) {
                try {
                    beforePost(url);
                }
                catch (err) {
                    logDebug("beforePost вызвал исключение", err);
                }
            }
            $.ajax({
                url: url,
                data: data,
                type: "POST",
                dataType: 'JSON',
                xhrFields: { withCredentials: true },
                success: function (data, status, jqXHR) { return $deferred.resolve(data); },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (onError) {
                        try {
                            onError(url);
                        }
                        catch (err) {
                            logDebug("onError вызвал исключение", err);
                        }
                    }
                    retries--;
                    if (retries <= 0) {
                        var err = new Error("can't post " + this.url + "\nstatus: " + jqXHR.status + "\ntextStatus: " + jqXHR.statusText + "\nerror: " + errorThrown);
                        $deferred.reject(err);
                        return;
                    }
                    //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
                    var _this = this;
                    setTimeout(function () {
                        if (beforePost) {
                            try {
                                beforePost(url);
                            }
                            catch (err) {
                                logDebug("beforePost вызвал исключение", err);
                            }
                        }
                        $.ajax(_this);
                    }, timeout);
                }
            });
            return [2 /*return*/, $deferred.promise()];
        });
    });
}
// COMMON ----------------------------------------
var $xioDebug = false;
function logDebug(msg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!$xioDebug)
        return;
    console.log.apply(console, [msg].concat(args));
}
/**
 * определяет есть ли на странице несколько страниц которые нужно перелистывать или все влазит на одну
 * если не задать аргумента, будет брать текущую страницу
 * @param $html код страницы которую надо проверить
 */
function hasPages($html) {
    // если не задать данные страницы, то считаем что надо использовать текущую
    if ($html == null)
        $html = $(document);
    // там не только кнопки страниц но еще и текст Страницы в первом li поэтому > 2
    var $pageLinks = $html.find('ul.pager_list li');
    return $pageLinks.length > 2;
}
/**
 * Формирует ссылку на установку новой пагинации. Если страница не имеет пагинатора, вернет null
 * @param $html
 * @param pages число элементов на страницу которое установить
 */
function getRepageUrl($html, pages) {
    if (pages === void 0) { pages = 10000; }
    if (!hasPages($html))
        return null;
    // снизу всегда несколько кнопок для числа страниц, НО одна может быть уже нажата мы не знаем какая
    // берем просто любую ненажатую, извлекаем ее текст, на у далее в ссылке всегда
    // есть число такое же как текст в кнопке. Заменяем на свое и все ок.
    var $pager = $html.find('ul.pager_options li').has("a").last();
    var num = $pager.text().trim();
    return $pager.find('a').attr('href').replace(num, pages.toString());
}
/**
 * Производит обрезку словаря (где ключи это строковые даты) до нужного числа ключей. Если ключи НЕ даты то даст ошибку.
   Если обрезать нечего то ничего не делает.
 * @param dict словарь который БУДЕТ изменен и удалены лишние самые старые элементы. shortDate: T
 * @param maxItems максимальное число самых последних дат которые оставить
 */
function trimDateDict(dict, maxItems) {
    // удалим лишние оставив maxItems дней истории
    if (Object.keys(dict).length <= maxItems)
        return;
    var delDates = Object.keys(dict)
        .map(function (v) { return dateFromShort(v); })
        .sort(function (a, b) { return b.getDate() - a.getTime(); })
        .map(function (v) { return dateToShort(v); })
        .slice(maxItems);
    for (var _i = 0, delDates_1 = delDates; _i < delDates_1.length; _i++) {
        var d = delDates_1[_i];
        delete dict[d];
    }
}
// SAVE & LOAD ------------------------------------
/**
 * По заданным параметрам создает уникальный ключик использую уникальный одинаковый по всем скриптам префикс
 * @param realm реалм для которого сейвить. Если кросс реалмово, тогда указать null
 * @param code строка отличающая данные скрипта от данных другого скрипта
 * @param subid если для юнита, то указать. иначе пропустить
 */
function buildStoreKey(realm, code, subid) {
    if (code.length === 0)
        throw new RangeError("Параметр code не может быть равен '' ");
    if (realm != null && realm.length === 0)
        throw new RangeError("Параметр realm не может быть равен '' ");
    if (subid != null && realm == null)
        throw new RangeError("Как бы нет смысла указывать subid и не указывать realm");
    var res = "^*"; // уникальная ботва которую добавляем ко всем своим данным
    if (realm != null)
        res += "_" + realm;
    if (subid != null)
        res += "_" + subid;
    res += "_" + code;
    return res;
}
/**
 * Заданный стандартный ключик хранилища разбивает на компоненты. Конечно учитывает что некоторые элементы
   могут отсутствовать. например нет subid или даже реалма. В общем разбивка согласуется с билдером ключей
 * @param key
 */
function splitStoreKey(key) {
    if (key.length <= 0)
        throw new Error("Длина ключа должны быть больше 0");
    // допустимые варианты ключей исходя из билдера ключей
    // ^*_rm
    // ^*_olga_rm
    // ^*_olga_1234_rm
    var rx = /^\^\*_(?:([a-z]+)_){0,1}(?:(\d+)_){0,1}([a-z]+){1}$/i;
    var res = rx.exec(key);
    if (res == null)
        throw new Error("\u0421\u0442\u0440\u043E\u043A\u0430 " + key + " \u043D\u0435 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u043C \u043A\u043B\u044E\u0447\u0435\u043C \u0445\u0440\u0430\u043D\u0438\u043B\u0438\u0449\u0430.");
    // так как часть групп может отсутствовать то в выходном массиве в этих местах будет undefined
    var realm = res[1] == null ? null : res[1].trim();
    var subid = res[2] == null ? null : parseInt(res[2]);
    var code = res[3].trim();
    return [realm, subid, code];
}
/**
 * Возвращает все ключи ЮНИТОВ для заданного реалма и КОДА.
 * @param realm
 * @param storeKey код ключа sh, udd, vh итд
 */
function getStoredUnitsKeys(realm, storeKey) {
    var res = [];
    for (var key in localStorage) {
        // если в ключе нет числа, не брать его
        var m = extractIntPositive(key);
        if (m == null)
            continue;
        // если ключик не совпадает со старым ключем для посетителей
        var subid = m[0];
        if (key !== buildStoreKey(realm, storeKey, subid))
            continue;
        res.push(key);
    }
    return res;
}
/**
 * Возвращает все ключи ЮНИТОВ для заданного реалма и КОДА. А так же subid юнита отдельно
 * @param realm
 * @param storeKey код ключа sh, udd, vh итд
 */
function getStoredUnitsKeysA(realm, storeKey) {
    var res = [];
    for (var key in localStorage) {
        // если в ключе нет числа, не брать его
        var m = extractIntPositive(key);
        if (m == null)
            continue;
        // если ключик не совпадает со старым ключем для посетителей
        var subid = m[0];
        if (key !== buildStoreKey(realm, storeKey, subid))
            continue;
        res.push([key, subid]);
    }
    return res;
}
/**
 * Выводит текстовое поле, куда выводит все ключи с содержимым в формате ключ=значение|ключи=значение...
 * @param test функция возвращающая ИСТИНУ если данный ключик надо экспортить, иначе ЛОЖЬ
 * @param $place элемент страницы в который будет добавлено текстовое поле для вывода
 */
function Export($place, test) {
    if ($place.length <= 0)
        return false;
    if ($place.find("#txtExport").length > 0) {
        $place.find("#txtExport").remove();
        return false;
    }
    var $txt = $('<textarea id="txtExport" style="display:block;width: 800px; height: 200px"></textarea>');
    var string = "";
    for (var key in localStorage) {
        if (!test(key))
            continue;
        if (string.length > 0)
            string += "|";
        string += key + "=" + localStorage[key];
    }
    $txt.text(string);
    $place.append($txt);
    return true;
}
function ExportA($place, keys, converter, delim) {
    if (delim === void 0) { delim = "\n"; }
    if ($place.length <= 0)
        return false;
    if ($place.find("#txtExport").length > 0) {
        $place.find("#txtExport").remove();
        return false;
    }
    var $txt = $('<textarea id="txtExport" style="display:block;width: 800px; height: 200px"></textarea>');
    var exportStr = "";
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (exportStr.length > 0)
            exportStr += delim;
        var item = converter == null ? localStorage[key] : converter(localStorage[key]);
        exportStr += key + "=" + item;
    }
    $txt.text(exportStr);
    $place.append($txt);
    return true;
}
/**
 * Импортирует в кэш данные введенные к текстовое окно. Формат данных такой же как в экспорте
 * Ключ=Значение|Ключ=Значение итд.
 * Если что то не заладится, будет выпадать с ошибкой. Существующие ключи перезаписывает, с уведомление в консоли
 * @param $place элемент страницы в который будет добавлено текстовое поле для ввода
 */
function Import($place) {
    if ($place.length <= 0)
        return false;
    if ($place.find("#txtImport").length > 0) {
        $place.find("#txtImport").remove();
        $place.find("#saveImport").remove();
        return false;
    }
    var $txt = $('<textarea id="txtImport" style="display:block;width: 800px; height: 200px"></textarea>');
    var $saveBtn = $("<input id=\"saveImport\" type=button disabled=\"true\" value=\"Save!\">");
    $txt.on("input propertychange", function (event) { return $saveBtn.prop("disabled", false); });
    $saveBtn.on("click", function (event) {
        var items = $txt.val().split("|"); // элементы вида Ключ=значение
        logDebug("\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E " + items.length + " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432");
        try {
            items.forEach(function (val, i, arr) {
                var item = val.trim();
                if (item.length <= 0)
                    throw new Error("\u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0443\u0441\u0442\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 " + i + ", \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C.");
                var kvp = item.split("="); // пара ключ значение
                if (kvp.length !== 2)
                    throw new Error("Должен быть только ключ и значение а по факту не так. " + item);
                var storeKey = kvp[0].trim();
                var storeVal = kvp[1].trim();
                if (storeKey.length <= 0 || storeVal.length <= 0)
                    throw new Error("Длина ключа или данных равна 0 " + item);
                if (localStorage[storeKey] != null)
                    logDebug("\u041A\u043B\u044E\u0447 " + storeKey + " \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C.");
                localStorage[storeKey] = storeVal;
            });
            alert("импорт завершен");
        }
        catch (err) {
            var msg = err.message;
            alert(msg);
        }
    });
    $place.append($txt).append($saveBtn);
    return true;
}
function ImportA($place, converter, delim) {
    if (delim === void 0) { delim = "\n"; }
    if ($place.length <= 0)
        return false;
    if ($place.find("#txtImport").length > 0) {
        $place.find("#txtImport").remove();
        $place.find("#saveImport").remove();
        return false;
    }
    var $txt = $('<textarea id="txtImport" style="display:block;width: 800px; height: 200px"></textarea>');
    var $saveBtn = $("<input id=\"saveImport\" type=button disabled=\"true\" value=\"Save!\">");
    $txt.on("input propertychange", function (event) { return $saveBtn.prop("disabled", false); });
    $saveBtn.on("click", function (event) {
        var items = $txt.val().split(delim); // элементы вида Ключ=значение
        logDebug("\u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043E " + items.length + " \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432");
        try {
            items.forEach(function (val, i, arr) {
                var item = val.trim();
                if (item.length <= 0)
                    throw new Error("\u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043F\u0443\u0441\u0442\u0443\u044E \u0441\u0442\u0440\u043E\u043A\u0443 \u0434\u043B\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 " + i + ", \u043D\u0435\u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C.");
                var kvp = item.split("="); // пара ключ значение
                if (kvp.length !== 2)
                    throw new Error("Должен быть только ключ и значение а по факту не так. " + item);
                var storeKey = kvp[0].trim();
                var storeVal = kvp[1].trim();
                if (storeKey.length <= 0 || storeVal.length <= 0)
                    throw new Error("Длина ключа или данных равна 0 " + item);
                if (localStorage[storeKey] != null)
                    logDebug("\u041A\u043B\u044E\u0447 " + storeKey + " \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442. \u041F\u0435\u0440\u0435\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C.");
                localStorage[storeKey] = converter == null ? storeVal : converter(storeVal);
            });
            alert("импорт завершен");
        }
        catch (err) {
            var msg = err.message;
            alert(msg);
        }
    });
    $place.append($txt).append($saveBtn);
    return true;
}

﻿
// 
// Набор вспомогательных функций для использования в других проектах. Универсальные
//   /// <reference path= "../../_jsHelper/jsHelper/jsHelper.ts" />

// список типов юнитов. берется по картинке в юните, или с класса i-farm, i-office в списках юнитов
enum UnitTypes {
    unknown = 0, // для неописанных еще в коде юнитов
    animalfarm, // животновод ферам
    farm,       // любая ферма земля
    lab,         // лаборатория
    mill, 
    mine,
    office,
    oilpump,
    orchard,
    sawmill,
    shop,
    seaport,
    warehouse,
    workshop,
    villa,
    fishingbase,
    service_light,
    fitness,
    medicine,
    restaurant,
    laundry,
    hairdressing,
    power,
    coal_power,
    incinerator_power,
    oil_power,
    fuel,
    repair,
    apiary,
    educational, kindergarten,  // картинка внутри юнита для образовательных и в списке
    sun_power,
    network,
    it, cellular, // в юните и в списке
}

// уровни сервиса
enum ServiceLevels{
    none= -1, lower = 0, low, normal, high, higher, elite
}

/**
 * Простенький конвертер, который из множества формирует массив значений множества. По факту массив чисел.
   используется внутреннее представление множеств и как бы может сломаться в будущем
 * @param enumType тип множества
 */
function enum2Arr<T>(enumType: any): T[] {
    let res: T[] = [];
    for (let key in enumType) {
        if (typeof enumType[key] === "number")
            res.push(enumType[key] as any as T);
    }
    return res;
}

/**
 * Простой счетчик. Увеличивается на 1 при каждом вызове метода Next. Нужен для подсчета числа запросов
 */
class Counter {
    private _count: number;;
    get Count(): number {
        return this._count;
    }

    constructor() {
        this._count = 0;
    }

    Next = () => {
        (this as Counter)._count++;
    }
}


// ARRAY && DICTIONARY ----------------------------

// Обычный словарь ключ значение. Добавлять свойства нельзя. Инициализация как {}
interface IDictionary<T> {
    [key: string]: T;
}

interface IDictionaryN<T> {
    [key: number]: T;
}


/**
 * Проверяет наличие в словаре ключей. Шорт алиас для удобства.
 * Если словарь не задать, вывалит исключение
 * @param dict проверяемый словарь
 */
function isEmpty<T>(dict: IDictionary<T>): boolean {
    return Object.keys(dict).length === 0;  // исключение на null
}

/**
 * Конвертит словарь в простую текстовую строку вида "key:val, key1:val1"
 * значения в строку конвертятся штатным toString()
 * Создана чисто потому что в словарь нельзя засунуть методы.
 * @param dict
 */
function dict2String<T>(dict: IDictionary<T>): string {
    if (isEmpty(dict))
        return "";

    let newItems: string[] = [];
    for (let key in dict)
        newItems.push(key + ":" + dict[key].toString());

    return newItems.join(", ");
}

/**
 * Фильтрует заданный словарь. Выбирает из него только те элементы которые проходят фильтр.
 * В любом раскладе возвращает пустой словарь
 * @param dict
 * @param selector
 */
function filterDictVal<T>(dict: IDictionary<T>, selector: (el: T) => boolean) {
    let res: IDictionary<T> = {};
    for (let key in dict) {
        let item = dict[key];

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
function mergeDict<T>(dict1: IDictionary<T>, dict2: IDictionary<T>) {
    if (dict1 == null || dict2 == null)
        throw new Error("аргументы не должны быть null");

    let res: IDictionary<T> = {};

    for (let key in dict1)
        res[key] = dict1[key];

    for (let key in dict2) {
        if (res[key] != null)
            throw new Error(`dict1 уже имеет такой же ключ '${key}' как и dict2`);

        res[key] = dict2[key];
    }

    return res;
}
function mergeDictN<T>(dict1: IDictionaryN<T>, dict2: IDictionaryN<T>) {
    if (dict1 == null || dict2 == null)
        throw new Error("аргументы не должны быть null");

    let res: IDictionaryN<T> = {};

    for (let key in dict1)
        res[key] = dict1[key];

    for (let key in dict2) {
        if (res[key] != null)
            throw new Error(`dict1 уже имеет такой же ключ '${key}' как и dict2`);

        res[key] = dict2[key];
    }

    return res;
}


/**
 * Проверяет что элемент есть в массиве.
 * @param item
 * @param arr массив НЕ null
 */
function isOneOf<T>(item: T, arr: T[]) {
    if (arr.length <= 0)
        return false;

    return arr.indexOf(item) >= 0;
}

/**
 * Преобразует массив в словарь используя заданные селектор ключа. 
 * @param arr
 * @param keySelector
 */
function toDictionaryN<T>(arr: Array<T>, keySelector: (el: T) => number): IDictionaryN<T> {
    let res: IDictionaryN<T> = {};

    if (!arr)
        throw new Error("arr null");

    if (!keySelector)
        throw new Error("keySelector null");

    for (let el of arr) {
        let k = keySelector(el);
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
function unique<T>(array: T[]): T[] {
    let res: T[] = [];
    for (let i = 0; i < array.length; i++) {
        let item = array[i];
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
function intersect<T>(a: T[], b: T[]): T[] {

    // чтобы быстрее бегал indexOf в A кладем более длинный массив
    if (b.length > a.length) {
        let t = b;
        b = a;
        a = t;
    }

    // находим пересечение с дублями
    let intersect: T[] = [];
    for (let item of a) {
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
function roundTo(n: number, decimals: number) {
    if (isNaN(n) || isNaN(decimals))
        throw new Error(`числа должны быть заданы. n:${n}, decimals:${decimals}`);

    if (decimals < 0)
        throw new Error(`decimals: ${decimals} не может быть меньше 0`);

    decimals = Math.round(decimals);    // делаем ставку на косяки округления откуда может прилететь 1.00000001
    let f = Math.pow(10, decimals);
    return Math.round(n * f) / f;
}

/**
 * floor до заданного числа знаков. Может дать погрешность если будет число вида x.99999999999
   так как при расчетах прибавляет 1е-10. Но это очень редкий случай когда округлит вверх
 * @param n
 * @param decimals
 */
function floorTo(n: number, decimals: number) {
    if (isNaN(n) || isNaN(decimals))
        throw new Error(`числа должны быть заданы. n:${n}, decimals:${decimals}`);

    if (decimals < 0)
        throw new Error(`decimals: ${decimals} не может быть меньше 0`);

    decimals = Math.round(decimals);    // делаем ставку на косяки округления откуда может прилететь 1.00000001
    let f = Math.pow(10, decimals);
    return Math.floor(n * f + 1e-10) / f;
}

/**
 * ceil до заданного числа знаков. Может дать погрешность если будет число вида x.00000000000001
   так как при расчетах вычитает 1е-10. Но это очень редкий случай когда округлит вверх
 * @param n
 * @param decimals
 */
function ceilTo(n: number, decimals: number) {
    if (isNaN(n) || isNaN(decimals))
        throw new Error(`числа должны быть заданы. n:${n}, decimals:${decimals}`);

    if (decimals < 0)
        throw new Error(`decimals: ${decimals} не может быть меньше 0`);

    decimals = Math.round(decimals);    // делаем ставку на косяки округления откуда может прилететь 1.00000001
    let f = Math.pow(10, decimals);
    return Math.ceil(n * f - 1e-10) / f;
}



// -------------------------------------------------

interface IAction0 {
    (): void;
}

interface IAction1<T> {
    (arg: T): void;
}

interface IFunction1<Tin, Tout> {
    (par1: Tin): Tout;
}


// PARSE -------------------------------------------

/**
 * удаляет из строки все денежные и специальные символы типо процента и пробелы между цифрами
 * @param str
 */
function cleanStr(str: string): string {
    return str.replace(/[\s\$\%\©]/g, "");
}

/**
 * Выдергивает реалм из текущего href ссылки если это возможно.
 */
function getRealm(): string | null {
    // https://*virtonomic*.*/*/main/globalreport/marketing/by_trade_at_cities/*
    // https://*virtonomic*.*/*/window/globalreport/marketing/by_trade_at_cities/*
    let rx = new RegExp(/https:\/\/virtonomic[A-Za-z]+\.[a-zA-Z]+\/([a-zA-Z]+)\/.+/ig);
    let m = rx.exec(document.location.href);
    if (m == null)
        return null;

    return m[1];
}

function getRealmOrError(): string {
    let realm = getRealm();
    if (realm === null)
        throw new Error("Не смог определить реалм по ссылке " + document.location.href);

    return realm;
}

/**
 * Парсит id компании со страницы. Если не получилось то вернет null
 */
function parseCompanyId(html: any): number | null {
    let $html = $(html);

    let href = $html.find("a.dashboard").attr("href");
    if (href == null || href.length <= 0)
        return null;

    let arr = href.match(/\d+/);
    if (arr == null || arr.length !== 1)
        return null;

    return numberfyOrError(arr[0]);
}

/**
 * Оцифровывает строку. Возвращает всегда либо число или Number.POSITIVE_INFINITY либо -1 если str не содержит числа.
 * @param variable любая строка.
 */
function numberfy(str: string): number {
    // возвращает либо число полученно из строки, либо БЕСКОНЕЧНОСТЬ, либо -1 если не получилось преобразовать.

    if (String(str) === 'Не огр.' ||
        String(str) === 'Unlim.' ||
        String(str) === 'Не обм.' ||
        String(str) === 'N’est pas limité' ||
        String(str) === 'No limitado' ||
        String(str) === '无限' ||
        String(str) === 'Nicht beschr.') {
        return Number.POSITIVE_INFINITY;
    } else {
        // если str будет undef null или что то страшное, то String() превратит в строку после чего парсинг даст NaN
        // не будет эксепшнов
        let n = parseFloat(cleanStr(String(str)));
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
 */
function numberfyOrError(str: string, minVal: number = 0, infinity: boolean = false) {
    let n = numberfy(str);
    if (!infinity && (n === Number.POSITIVE_INFINITY || n === Number.NEGATIVE_INFINITY))
        throw new RangeError("Получили бесконечность, что запрещено.");

    if (n <= minVal)
        throw new RangeError("Число должно быть > " + minVal);

    return n;
}

/**
 * Ищет паттерн в строке. Предполагая что паттерн там обязательно есть 1 раз. Если
 * нет или случился больше раз, валим ошибку
 * @param str строка в которой ищем
 * @param rx паттерн который ищем
 */
function matchedOrError(str: string, rx: RegExp, errMsg?: string): string {
    let m = str.match(rx);
    if (m == null)
        throw new Error(errMsg || `Паттерн ${rx} не найден в ${str}`);

    if (m.length > 1)
        throw new Error(errMsg || `Паттерн ${rx} найден в ${str} ${m.length} раз вместо ожидаемого 1`);

    return m[0];
}

/**
 * Пробуем прогнать регулярное выражение на строку, если не прошло, то вывалит ошибку.
 * иначе вернет массив. 0 элемент это найденная подстрока, остальные это найденные группы ()
 * @param str
 * @param rx
 * @param errMsg
 */
function execOrError(str: string, rx: RegExp, errMsg?: string) {
    let m = rx.exec(str);
    if (m == null)
        throw new Error(errMsg || `Паттерн ${rx} не найден в ${str}`);

    return m;
}

/**
 * из строки пробует извлечь все вещественные числа. Рекомендуется применять ТОЛЬКО для извлечения из текстовых строк.
 * для простого парсинга числа пойдет numberfy
 * Если их нет вернет null
 * @param str
 */
function extractFloatPositive(str: string): number[]|null {

    let m = cleanStr(str).match(/\d+\.\d+/ig);
    if (m == null)
        return null;

    let n = m.map((val, i, arr) => numberfyOrError(val, -1));
    return n;
}

/**
 * из указанной строки, извлекает числа. обычно это id юнита товара и так далее
 * @param str
 */
function extractIntPositive(str: string): number[] | null {
    let m = cleanStr(str).match(/\d+/ig);
    if (m == null)
        return null;

    let n = m.map((val, i, arr) => numberfyOrError(val, -1));
    return n;
}

/**
 * По текстовой строке возвращает номер месяца начиная с 0 для января. Либо null
 * @param str очищенная от пробелов и лишних символов строка
 */
function monthFromStr(str: string) {
    let mnth = ["январ", "феврал", "март", "апрел", "ма", "июн", "июл", "август", "сентябр", "октябр", "ноябр", "декабр"];
    for (let i = 0; i < mnth.length; i++) {
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
function extractDate(str: string): Date|null {
    let dateRx = /^(\d{1,2})\s+([а-я]+)\s+(\d{1,4})/i;
    let m = dateRx.exec(str);
    if (m == null)
        return null;

    let d = parseInt(m[1]);
    let mon = monthFromStr(m[2]);
    if (mon == null)
        return null;

    let y = parseInt(m[3]);

    return new Date(y, mon, d);
}
function extractDateOrError(str: string): Date {
    let dt = extractDate(str);
    if (dt == null)
        throw new Error(`Не получилось извлечь дату из "${str}"`);

    return dt;
}

/**
 * из даты формирует короткую строку типа 01.12.2017
 * @param date
 */
function dateToShort(date: Date): string {
    let d = date.getDate();
    let m = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    let dStr = d < 10 ? "0" + d : d.toString();
    let mStr = m < 10 ? "0" + m : m.toString();

    return `${dStr}.${mStr}.${yyyy}`;
}

/**
 * из строки вида 01.12.2017 формирует дату
 * @param str
 */
function dateFromShort(str: string): Date {
    let items = str.split(".");

    let d = parseInt(items[0]);
    if (d <= 0)
        throw new Error("дата неправильная.");

    let m = parseInt(items[1]) - 1;
    if (m < 0)
        throw new Error("месяц неправильная.");

    let y = parseInt(items[2]);
    if (y < 0)
        throw new Error("год неправильная.");

    return new Date(y, m, d);
}

/**
 * По заданному числу возвращает число с разделителями пробелами для удобства чтения
 * @param num
 */
function sayNumber(num: number): string {
    if (num < 0)
        return "-" + sayNumber(-num);

    if (Math.round(num * 100) / 100 - Math.round(num))
        num = Math.round(num * 100) / 100;
    else
        num = Math.round(num);

    let s = num.toString();
    let s1 = "";
    let l = s.length;
    let p = s.indexOf(".");
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
function sayMoney(num: number, symbol:string="$") {
    let result = sayNumber(num);
    if (symbol != null) {
        if (num < 0) result = '-' + symbol + sayNumber(Math.abs(num));
        else result = symbol + result;
    }
    return result;
}

/**
 * Пробует взять со страницы тип юнита
 * Сейчас эта хня берется из классов вида
   <div class="picture bg-page-unit-header-kindergarten"></div>
 * Он кореллирует четко с i-kindergarten в списке юнитов
 * Если картинки на странице нет, то вернет null. Сам разбирайся почему ее там нет
   Может выдать ошибку если тип не был найден в списке типов
 * @param $html
 */
//function getUnitType($html: JQuery): UnitTypes | null {

//    let $div = $html.find("div.picture");
//    if ($div.length !== 1)
//        return null;

//    let typeStr = "";
//    let classList = $div.attr("class").split(/\s+/);
//    for (let cl of classList) {
//        if (cl.startsWith("bg-page-unit-header-") == false)
//            continue;

//        // вырезаем тупо "bg-page-unit-header-"
//        typeStr = cl.slice(20);
//    }

//    // некоторый онанизм с конверсией но никак иначе
//    let type: UnitTypes = (UnitTypes as any)[typeStr] ? (UnitTypes as any)[typeStr] : UnitTypes.unknown;
//    if (type == UnitTypes.unknown)
//        throw new Error("Не описан тип юнита " + typeStr);

//    return type;
//}
/**
 * Пробует взять со страницы картинку юнита и спарсить тип юнита
 * Пример сорса /img/v2/units/shop_1.gif  будет тип shop.
 * Он кореллирует четко с i-shop в списке юнитов
 * Если картинки на странице нет, то вернет null. Сам разбирайся почему ее там нет
 * @param $html
 */
function getUnitTypeOld($html: JQuery): UnitTypes | null {

    let $div = $html.find("#unitImage");
    if ($div.length === 0)
        return null;

    let src = $div.find("img").attr("src");
    let items = src.split("/");
    if (items.length < 2)
        throw new Error("Что то не так с урлом картинки " + src);

    let typeStr = items[items.length - 1].split("_")[0];
    let type: UnitTypes = (UnitTypes as any)[typeStr] ? (UnitTypes as any)[typeStr] : UnitTypes.unknown;
    if (type == UnitTypes.unknown)
        throw new Error("Не описан тип юнита " + typeStr);

    return type;
}

/**
 * Форматирует строки в соответствии с форматом в C#. Плейсхолдеры {0}, {1} заменяет на аргументы.
   если аргумента НЕТ а плейсхолдер есть, вывалит исключение, как и в сишарпе.
 * @param str шаблон строки
 * @param args аргументы которые подставить
 */
function formatStr(str: string, ...args: any[]): string {
    let res = str.replace(/{(\d+)}/g, (match, number) => {
        if (args[number] == null)
            throw new Error(`плейсхолдер ${number} не имеет значения`);

        return args[number];
    });
    return res;
}

/**
 * если значение null то вывалит ошибку, иначе вернет само значение. Короткий метод для проверок на нулл
 * @param val
 */
function nullCheck<T>(val: T | null) {

    if (val == null)
        throw new Error(`nullCheck Error`);

    return val;
}

// РЕГУЛЯРКИ ДЛЯ ССЫЛОК ------------------------------------

// для 1 юнита
// 
//let url_unit_rx = /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+/i;           // внутри юнита. любая страница
//let url_unit_main_rx = /\/\w+\/(?:main|window)\/unit\/view\/\d+\/?$/i;     // главная юнита
//let url_unit_finrep_rx = /\/[a-z]+\/main\/unit\/view\/\d+\/finans_report(\/graphical)?$/i; // финанс отчет
//let url_unit_finrep_by_prod_rx = /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/finans_report\/by_production\/?$/i; // финанс отчет по товарам
//let url_trade_hall_rx = /\/[a-z]+\/main\/unit\/view\/\d+\/trading_hall\/?/i;    // торговый зал
//let url_price_history_rx = /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/product_history\/\d+\/?/i; // история продаж в магазине по товару
//let url_supply_rx = /\/[a-z]+\/main\/unit\/view\/\d+\/supply\/?/i;    // снабжение
//let url_sale_rx = /\/[a-z]+\/main\/unit\/view\/\d+\/sale\/?/i;        // продажа склад/завод
//let url_ads_rx = /\/[a-z]+\/main\/unit\/view\/\d+\/virtasement$/i;  // реклама
//let url_education_rx = /\/[a-z]+\/window\/unit\/employees\/education\/\d+\/?/i; // обучение

//let url_supply_create_rx = /\/[a-z]+\/unit\/supply\/create\/\d+\/step2\/?$/i;  // заказ товара в маг, или склад. в общем стандартный заказ товара
//let url_equipment_rx = /\/[a-z]+\/window\/unit\/equipment\/\d+\/?$/i;   // заказ оборудования на завод, лабу или куда то еще

// для компании
// 
//let url_unit_list_rx = /\/[a-z]+\/(?:main|window)\/company\/view\/\d+(\/unit_list)?(\/xiooverview|\/overview)?$/i;     // список юнитов. Работает и для списка юнитов чужой компании
//let url_rep_finance_byunit = /\/[a-z]+\/main\/company\/view\/\d+\/finance_report\/by_units(?:\/.*)?$/i;  // отчет по подразделениями из отчетов
//let url_rep_ad = /\/[a-z]+\/main\/company\/view\/\d+\/marketing_report\/by_advertising_program$/i;  // отчет по рекламным акциям
//let url_manag_equip_rx = /\/[a-z]+\/window\/management_units\/equipment\/(?:buy|repair)$/i;     // в окне управления юнитами групповой ремонт или закупка оборудования
//let url_manag_empl_rx = /\/[a-z]+\/main\/company\/view\/\d+\/unit_list\/employee\/?$/i;     // управление - персонал


// для для виртономики
// 
//let url_global_products_rx = /[a-z]+\/main\/globalreport\/marketing\/by_products\/\d+\/?$/i; // глобальный отчет по продукции из аналитики
//let url_products_rx = /\/[a-z]+\/main\/common\/main_page\/game_info\/products$/i;   // страница со всеми товарами игры
//let url_trade_products_rx = /\/[a-z]+\/main\/common\/main_page\/game_info\/trading$/i;   // страница с торгуемыми товарами
//let url_city_retail_report_rx = /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_trade_at_cities\/\d+/i; // розничный отчет по конкретному товару
//let url_products_size_rx = /\/[a-z]+\/main\/industry\/unit_type\/info\/2011\/volume\/?/i;  // размеры продуктов на склада
//let url_country_duties_rx = /\/[a-z]+\/main\/geo\/countrydutylist\/\d+\/?/i;    // таможенные пошлины и ИЦ
// let url_tm_info_rx = /\/[a-z]+\/main\/globalreport\/tm\/info/i;    // брендовые товары список

let Url_rx = {
    // для виртономики
    v_city_retail_report: /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_trade_at_cities\/\d+/i, // розничный отчет по конкретному товару
    v_tm_info: /\/[a-z]+\/(?:main|window)\/globalreport\/tm\/info\/?$/i,                        // брендовые товары список
    v_country_duties: /\/[a-z]+\/(?:main|window)\/geo\/countrydutylist\/\d+\/?/i,               // таможенные пошлины и ИЦ
    v_regions: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/bonuses\/region\/?$/i, // список регионов
    v_countries: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/bonuses\/country\/?$/i, 
    v_cities: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/bonuses\/city\/?$/i,
    v_products_size: /\/[a-z]+\/(?:main|window)\/industry\/unit_type\/info\/2011\/volume\/?/i,  // размеры продуктов на склада
    v_media_rep_spec: /\/[a-z]+\/(?:main|window)\/mediareport\/\d+/i,                   // аналитический отчет по спецухам
    v_global_products: /[a-z]+\/main\/globalreport\/marketing\/by_products\/\d+\/?$/i,  // Аналитика - Маркетинг - Продукция
    v_products: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/products$/i,             // страница со всеми товарами игры
    v_trade_products: /\/[a-z]+\/(?:main|window)\/common\/main_page\/game_info\/trading$/i,        // страница с торгуемыми товарами
    v_energy_price: /\/[a-z]+\/(?:main|window)\/geo\/tariff\/\d+/i,        // тарифы на энергию
    v_product_suppliers: /\/[a-z]+\/(?:main|window)\/globalreport\/marketing\/by_products\/\d+\/?$/i,   // поставщики продукта на реалме

    // для компании в целом
    top_manager: /\/[a-z]+\/(?:main|window)\/user\/privat\/persondata\/knowledge\/?$/ig,    // квалификации менеджера
    comp_ads_rep: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+\/marketing_report\/by_advertising_program\/?$/i,   // отчет по рекламным акциям
    comp_fin_rep_byunit: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+\/finance_report\/by_units(?:\/.*)?$/i,      // отчет по подразделениями из отчетов
    comp_unit_list: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+(\/unit_list)?(\/xiooverview|\/overview)?$/i,     // список юнитов. Работает и для списка юнитов чужой компании
    comp_manage_salary: /\/[a-z]+\/(?:main|window)\/company\/view\/\d+\/unit_list\/employee\/salary\/?$/i,     // управление зарплатой 

    // для юнита
    unit_any: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+/i,                    // внутри юнита. любая страница
    unit_main: /\/[a-z]+\/main\/unit\/view\/\d+\/?$/i,                          // главная юнита
    unit_ads: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/virtasement\/?$/i,   // реклама
    unit_salary: /\/[a-z]+\/window\/unit\/employees\/engage\/\d+\/?$/ig,        // зарплата
    unit_sale: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/sale\/?/i,          // продажа склад/завод
    unit_supply: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/supply\/?/i,      // снабжение
    unit_supply_create: /\/[a-z]+\/unit\/supply\/create\/\d+\/step2\/?$/i,      // заказ товара в маг, или склад. в общем стандартный заказ товара
    unit_trade_hall: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/trading_hall\/?/i, // торговый зал
    unit_retail_price_history: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/product_history\/\d+\/?/i, // история продаж в магазине по товару
    unit_education: /\/[a-z]+\/window\/unit\/employees\/education\/\d+\/?/i,   // обучение
    unit_ware_resize: /\/[a-z]+\/window\/unit\/upgrade\/\d+\/?$/i,              // окно смена размера склада
    unit_ware_change_spec: /\/[a-z]+\/window\/unit\/speciality_change\/\d+\/?$/i,   // смена спецухи склада
    unit_finrep: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/finans_report(\/graphical)?$/i, // финанс отчет
    unit_finrep_by_prod: /\/[a-z]+\/(?:main|window)\/unit\/view\/\d+\/finans_report\/by_production\/?$/i, // финанс отчет по товарам
};

/**
 * По заданной ссылке и хтмл определяет находимся ли мы внутри юнита или нет.
 * Если на задавать ссылку и хтмл то берет текущий документ.
 * Вызов без параметров приводит к определению находимся ли мы своем юните сейчас
 * @param urlPath
 * @param $html
 * @param my своя компания или нет?
 */
function isUnit(urlPath?: string, $html?: JQuery, my: boolean = true) {
    if (!urlPath || !$html) {
        urlPath = document.location.pathname;
        $html = $(document);
    }

    // для ситуации когда мы внутри юнита характерно что всегда ссылка вида 
    // https://virtonomica.ru/olga/main/unit/view/6452212/*
    let urlOk = Url_rx.unit_any.test(urlPath);
    if (!urlOk)
        return false;

    // но у своего юнита есть слева в табах стрелочка со ссылью на компанию с тем же айди что и ссыль на дашборду. А для чужого нет ее и табов
    let urlCompany = nullCheck($html.find("a[data-name='itour-tab-company-view'").attr("href"));
    //let urlOffice = $html.find("div.officePlace a").attr("href");
    let urlDash = nullCheck($html.find("a.dashboard").attr("href"));
    if (urlCompany.length === 0 || urlDash.length === 0)
        throw new Error("Ссылка на юзерлист или дашборду не может быть найдена");

    let isMy = (`${urlCompany}/dashboard` === urlDash);
    return my ? isMy : !isMy;
}
function isUnitOld(urlPath?: string, $html?: JQuery, my: boolean = true) {
    if (!urlPath || !$html) {
        urlPath = document.location.pathname;
        $html = $(document);
    }

    // для ситуации когда мы внутри юнита характерно что всегда ссылка вида 
    // https://virtonomica.ru/olga/main/unit/view/6452212/*
    let urlOk = Url_rx.unit_any.test(urlPath);
    if (!urlOk)
        return false;

    // но у своего юнита ссыль на офис имеет тот же айди что и ссыль на дашборду. А для чужого нет
    let urlOffice = $html.find("div.officePlace a").attr("href");
    let urlDash = $html.find("a.dashboard").attr("href");
    if (urlOffice.length === 0 || urlDash.length === 0)
        throw new Error("Ссылка на офис или дашборду не может быть найдена");

    let isMy = (`${urlOffice}/dashboard` === urlDash);
    return my ? isMy : !isMy;
}

/**
 * Проверяет что мы именно на своей странице со списком юнитов. По ссылке и id компании
 * Проверок по контенту не проводит.
 */
function isMyUnitList(): boolean {

    // для своих и чужих компани ссылка одна, поэтому проверяется и id
    if (Url_rx.comp_unit_list.test(document.location.pathname) === false)
        return false;

    // запрос id может вернуть ошибку если мы на window ссылке. значит точно у чужого васи
    try {
        let id = nullCheck(parseCompanyId(document));
        let urlId = extractIntPositive(document.location.pathname) as number[]; // полюбому число есть иначе регекс не пройдет
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
function isOthersUnitList(): boolean {

    // для своих и чужих компани ссылка одна, поэтому проверяется и id
    if (Url_rx.comp_unit_list.test(document.location.pathname) === false)
        return false;

    try {
        // для чужого списка будет разный айди в дашборде и в ссылке
        let id = nullCheck(parseCompanyId(document));
        let urlId = extractIntPositive(document.location.pathname) as number[]; // полюбому число есть иначе регекс не пройдет
        if (urlId[0] === id)
            return false;
    }
    catch (err) {
        // походу мы на чужом window списке. значит ок
        return true;
    }
    return true;
}

function isUnitMain(urlPath: string, html: HTMLDocument, my: boolean = true): boolean {
    let ok = Url_rx.unit_main.test(urlPath);
    if (!ok)
        return false;
    
    let hasTabs = $(html).find("ul.tabu").length > 0;
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

function isUnitFinanceReport(): boolean {
    return Url_rx.unit_finrep.test(document.location.pathname);
}

function isCompanyRepByUnit(): boolean {
    return Url_rx.comp_fin_rep_byunit.test(document.location.pathname);
}

/**
 * Возвращает Истину если данная страница есть страница в магазине своем или чужом. Иначе Ложь
 * @param html полностью страница
 * @param my свой юнит или чужой
 */
function isShop(html: HTMLDocument, my: boolean = true): boolean {
    let $html = $(html);

    // нет разницы наш или чужой юнит везде картинка мага нужна. ее нет только если window
    let $img = $html.find("#unitImage img[src*='/shop_']");
    if ($img.length > 1)
        throw new Error(`Найдено несколько (${$img.length}) картинок Магазина.`);

    return $img.length > 0;
}

function isWarehouse($html: JQuery): boolean {

    // нет разницы наш или чужой юнит везде картинка мага нужна. ее нет только если window
    let $img = $html.find("#unitImage img[src*='/warehouse_']");
    if ($img.length > 1)
        throw new Error(`Найдено несколько (${$img.length}) картинок Склада.`);

    return $img.length > 0;
}


/**
 * Возвращает Истину если данная страница есть страница в заправке своей или чужой. Иначе Ложь
 * @param html полностью страница
 * @param my свой юнит или чужой
 */
function isFuel(html: HTMLDocument, my: boolean = true): boolean {
    let $html = $(html);

    // нет разницы наш или чужой юнит везде картинка мага нужна
    let $img = $html.find("#unitImage img[src*='/fuel_']");
    if ($img.length > 1)
        throw new Error(`Найдено несколько (${$img.length}) картинок Магазина.`);

    return $img.length > 0;
}

function hasTradeHall(html: HTMLDocument, my: boolean = true): boolean {
    let $html = $(html);

    if (my) {
        let $a = $html.find("ul.tabu a[href$=trading_hall]");
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
function closestByTagName(items: JQuery, tagname: string): JQuery {
    let tag = tagname.toUpperCase();

    let found: Node[] = [];
    for (let i = 0; i < items.length; i++) {
        let node: Node = items[i];
        while ((node = node.parentNode) && node.nodeName != tag) { };

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
function getOnlyText(item: JQuery): string[] {

    // просто children() не отдает текстовые ноды.
    let $childrenNodes = item.contents();
    let res: string[] = [];
    for (let i = 0; i < $childrenNodes.length; i++) {
        let el = $childrenNodes.get(i);
        if (el.nodeType === 3)
            res.push($(el).text());     // так как в разных браузерах текст запрашивается по разному, 
                                        // универсальный способ запросить через jquery
    }

    return res;
}

/**
 * Пробует найти ровно 1 элемент для заданного селектора. если не нашло или нашло больше валит ошибку
 * @param $item
 * @param selector
 */
function oneOrError($item: JQuery, selector: string): JQuery {
    let $one = $item.find(selector);
    if ($one.length != 1)
        throw new Error(`Найдено ${$one.length} элементов вместо 1 для селектора ${selector}`);

    return $one;
}

// AJAX ----------------------------------------

/**
 * Отправляет запрос на установку нужной пагинации. Возвращает promice дальше делай с ним что надо.
 */
function doRepage(pages: number, $html?: JQuery): JQueryPromise<string> {

    // если не задать данные страницы, то считаем что надо использовать текущую
    if ($html == null)
        $html = $(document);

    // снизу всегда несколько кнопок для числа страниц, НО одна может быть уже нажата мы не знаем какая
    // берем просто любую ненажатую, извлекаем ее текст, на у далее в ссылке всегда
    // есть число такое же как текст в кнопке. Заменяем на свое и все ок.
    let $pager = $html.find('ul.pager_options li').has("a").last();
    let num = $pager.text().trim();
    let pagerUrl = $pager.find('a').attr('href').replace(num, pages.toString());

    // запросили обновление пагинации, дальше юзер решает что ему делать с этим
    let deffered = $.Deferred();
    $.get(pagerUrl)
        .done((data, status, jqXHR) => deffered.resolve(data))
        .fail((err) => deffered.reject("Не удалось установить пагинацию => " + err));

    return deffered.promise();
}

/**
 * Загружается указанную страницу используя заданное число повторов и таймаут. Так же можно задать
 * нужно ли убирать пагинацию или нет. Если нужно, то функция вернет страничку БЕЗ пагинации
 * @param url
 * @param retries число попыток
 * @param timeout 
 * @param repage нужно ли убирать пагинацию
 */
function getPage(url: string, retries: number = 10, timeout: number = 1000, repage: boolean = true): JQueryPromise<string> {

    let deffered = $.Deferred();

    // сначала запросим саму страницу с перезапросом по ошибке
    tryGet(url, retries, timeout)
        .then((html) => {

            let locdef = $.Deferred();

            if (html == null) {
                locdef.reject("неизвестная ошибка. страница пришла пустая " + url);
                return locdef.promise();
            }

            // если страниц нет, то как бы не надо ничо репейджить
            // если не надо репейджить то тоже не будем
            let $html = $(html);
            if (!repage || !hasPages($html)) {
                deffered.resolve(html);
            }
            else {
                // репейджим
                let purl = getRepageUrl($html, 10000);
                if (purl == null)
                    locdef.reject("не смог вытащить урл репейджа хотя он там должен быть");
                else
                    locdef.resolve(purl);
            }

            return locdef.promise();
        })          // если нет репейджа все закончится тут
        .then((purl: string) => {
            let locdef = $.Deferred();

            tryGet(purl, retries, timeout)
                .done(() => locdef.resolve())
                .fail((err) => locdef.reject("ошибка репейджа => " + err));

            return locdef.promise();
        })  // запросим установку репейджа
        .then(() => tryGet(url, retries, timeout)) // снова запросим страницу
        .then((html) => deffered.resolve(html))
        .fail((err) => deffered.reject(err));

    return deffered.promise();
}

/**
 * Запрашивает страницу. При ошибке поробует повторить запрос через заданное число секунд.
 * Пробует заданное число попыток, после чего возвращает reject
 * @param url
 * @param retries число попыток загрузки
 * @param timeout таймаут между попытками
 */
function tryGet(url: string, retries: number = 10, timeout: number = 1000): JQueryPromise<string> {
    let $deffered = $.Deferred();
    $deffered.notify("0: " + url); // сразу даем уведомление, это работает. НО только 1 сработает если вызвать ДО установки прогресс хендлера на промис

    $.ajax({
        url: url,
        type: "GET",

        success: (data, status, jqXHR) => $deffered.resolve(data),

        error: function (this: JQueryAjaxSettings, jqXHR: JQueryXHR, textStatus: string, errorThrown: string) {
            retries--;
            if (retries <= 0) {
                $deffered.reject("Не смог загрузить страницу " + this.url);
                return;
            }

            logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
            let _this = this;
            setTimeout(() => {
                $deffered.notify("0: " + url);     // уведомляем об очередном запросе
                $.ajax(_this);
            }, timeout);
        }
    });

    return $deffered.promise();
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
async function tryGet_async(url: string, retries: number = 10, timeout: number = 1000, beforeGet?: IAction1<string>, onError?: IAction1<string>): Promise<any> {
    //logDebug(`tryGet_async: ${url}`);

    // сам метод пришлось делать Promise<any> потому что string | Error не работало какого то хуя не знаю. Из за стрик нулл чек
    let $deffered = $.Deferred<string>();
    
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

        success: (data, status, jqXHR) => $deffered.resolve(data),

        error: function (this: JQueryAjaxSettings, jqXHR: JQueryXHR, textStatus: string, errorThrown: string) {

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
                let err = new Error(`can't get ${this.url}\nstatus: ${jqXHR.status}\ntextStatus: ${jqXHR.statusText}\nerror: ${errorThrown}`);
                $deffered.reject(err);
                return;
            }

            //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
            let _this = this;
            setTimeout(() => {
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
    
    return $deffered.promise();
}

/**
 * Отправляет данные на сервер запросом POST. В остальном работает как и гет. Так же вернет промис который ресолвит с возвращенными данными
 * @param url
 * @param form данные для отправки на сервер
 * @param retries
 * @param timeout
 * @param beforePost
 */
async function tryPost_async(url: string, form: any, retries: number = 10, timeout: number = 1000, beforePost?: IAction1<string>, onError?: IAction1<string>): Promise <any> {

    // сам метод пришлось делать Promise<any> потому что string | Error не работало какого то хуя не знаю. Из за стрик нулл чек
    let $deferred = $.Deferred<string>();

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

        success: (data, status, jqXHR) => $deferred.resolve(data),

        error: function (this: JQueryAjaxSettings, jqXHR: JQueryXHR, textStatus: string, errorThrown: string) {

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
                let err = new Error(`can't post ${this.url}\nstatus: ${jqXHR.status}\ntextStatus: ${jqXHR.statusText}\nerror: ${errorThrown}`);
                $deferred.reject(err);
                return;
            }

            //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
            let _this = this;
            setTimeout(() => {
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

    return $deferred.promise();
}

/**
 * Отправляет данные на сервер запросом POST. В остальном работает как и гет. Так же вернет промис который ресолвит с возвращенными данными
 * @param url
 * @param data данные для отправки на сервер
 * @param retries
 * @param timeout
 * @param beforePost
 */
async function tryPostJSON_async(url: string, data: any, retries: number = 10, timeout: number = 1000, beforePost?: IAction1<string>, onError?: IAction1<string>): Promise<any> {

    // сам метод пришлось делать Promise<any> потому что string | Error не работало какого то хуя не знаю. Из за стрик нулл чек
    let $deferred = $.Deferred<string>();

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

        success: (data, status, jqXHR) => $deferred.resolve(data),

        error: function (this: JQueryAjaxSettings, jqXHR: JQueryXHR, textStatus: string, errorThrown: string) {

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
                let err = new Error(`can't post ${this.url}\nstatus: ${jqXHR.status}\ntextStatus: ${jqXHR.statusText}\nerror: ${errorThrown}`);
                $deferred.reject(err);
                return;
            }

            //logDebug(`ошибка запроса ${this.url} осталось ${retries} попыток`);
            let _this = this;
            setTimeout(() => {
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

    return $deferred.promise();
}



// COMMON ----------------------------------------

let $xioDebug = false;

function logDebug(msg: string, ...args: any[]) {
    if (!$xioDebug)
        return;

    console.log(msg, ...args);
}

/**
 * определяет есть ли на странице несколько страниц которые нужно перелистывать или все влазит на одну
 * если не задать аргумента, будет брать текущую страницу
 * @param $html код страницы которую надо проверить
 */
function hasPages($html?: JQuery) {

    // если не задать данные страницы, то считаем что надо использовать текущую
    if ($html == null)
        $html = $(document);

    // там не только кнопки страниц но еще и текст Страницы в первом li поэтому > 2
    let $pageLinks = $html.find('ul.pager_list li');
    return $pageLinks.length > 2;
}

/**
 * Формирует ссылку на установку новой пагинации. Если страница не имеет пагинатора, вернет null
 * @param $html
 * @param pages число элементов на страницу которое установить
 */
function getRepageUrl($html: JQuery, pages: number = 10000): string | null {

    if (!hasPages($html))
        return null;

    // снизу всегда несколько кнопок для числа страниц, НО одна может быть уже нажата мы не знаем какая
    // берем просто любую ненажатую, извлекаем ее текст, на у далее в ссылке всегда
    // есть число такое же как текст в кнопке. Заменяем на свое и все ок.
    let $pager = $html.find('ul.pager_options li').has("a").last();
    let num = $pager.text().trim();
    return $pager.find('a').attr('href').replace(num, pages.toString());
}

/**
 * Производит обрезку словаря (где ключи это строковые даты) до нужного числа ключей. Если ключи НЕ даты то даст ошибку.
   Если обрезать нечего то ничего не делает.
 * @param dict словарь который БУДЕТ изменен и удалены лишние самые старые элементы. shortDate: T
 * @param maxItems максимальное число самых последних дат которые оставить
 */
function trimDateDict<T>(dict: IDictionary<T>, maxItems: number) {

    // удалим лишние оставив maxItems дней истории
    if (Object.keys(dict).length <= maxItems)
        return;

    let delDates = Object.keys(dict)
        .map(v => dateFromShort(v))
        .sort((a, b) => b.getDate() - a.getTime())
        .map(v => dateToShort(v))
        .slice(maxItems);

    for (let d of delDates)
        delete dict[d];
}


// SAVE & LOAD ------------------------------------

/**
 * По заданным параметрам создает уникальный ключик использую уникальный одинаковый по всем скриптам префикс
 * @param realm реалм для которого сейвить. Если кросс реалмово, тогда указать null
 * @param code строка отличающая данные скрипта от данных другого скрипта
 * @param subid если для юнита, то указать. иначе пропустить
 */
function buildStoreKey(realm: string | null, code: string, subid?: number): string {
    if (code.length === 0)
        throw new RangeError("Параметр code не может быть равен '' ");

    if (realm != null && realm.length === 0)
        throw new RangeError("Параметр realm не может быть равен '' ");

    if (subid != null && realm == null)
        throw new RangeError("Как бы нет смысла указывать subid и не указывать realm");

    let res = "^*";  // уникальная ботва которую добавляем ко всем своим данным
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
function splitStoreKey(key: string): [string | null, number | null, string] {
    if (key.length <= 0)
        throw new Error("Длина ключа должны быть больше 0");

    // допустимые варианты ключей исходя из билдера ключей
    // ^*_rm
    // ^*_olga_rm
    // ^*_olga_1234_rm
    let rx = /^\^\*_(?:([a-z]+)_){0,1}(?:(\d+)_){0,1}([a-z]+){1}$/i;
    let res = rx.exec(key);
    if (res == null)
        throw new Error(`Строка ${key} не является допустимым ключем хранилища.`);

    // так как часть групп может отсутствовать то в выходном массиве в этих местах будет undefined
    let realm = res[1] == null ? null : res[1].trim();
    let subid = res[2] == null ? null : parseInt(res[2]);
    let code = res[3].trim();

    return [realm, subid, code];
}

/**
 * Возвращает все ключи ЮНИТОВ для заданного реалма и КОДА. 
 * @param realm
 * @param storeKey код ключа sh, udd, vh итд
 */
function getStoredUnitsKeys(realm: string, storeKey: string) {

    let res: string[] = [];
    for (let key in localStorage) {
        // если в ключе нет числа, не брать его
        let m = extractIntPositive(key);
        if (m == null)
            continue;

        // если ключик не совпадает со старым ключем для посетителей
        let subid = m[0];
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
function getStoredUnitsKeysA(realm: string, storeKey: string): [string, number][] {

    let res: [string,number][] = [];
    for (let key in localStorage) {
        // если в ключе нет числа, не брать его
        let m = extractIntPositive(key);
        if (m == null)
            continue;

        // если ключик не совпадает со старым ключем для посетителей
        let subid = m[0];
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
function Export($place: JQuery, test: (key: string) => boolean): boolean {

    if ($place.length <= 0)
        return false;

    if ($place.find("#txtExport").length > 0) {
        $place.find("#txtExport").remove();
        return false;
    }

    let $txt = $('<textarea id="txtExport" style="display:block;width: 800px; height: 200px"></textarea>');

    let string = "";
    for (let key in localStorage) {
        if (!test(key))
            continue;

        if (string.length > 0)
            string += "|";

        string += `${key}=${localStorage[key]}`;
    }

    $txt.text(string);
    $place.append($txt);
    return true;
}
function ExportA($place: JQuery, keys: string[], converter: (val: string) => string, delim: string ="\n"): boolean {

    if ($place.length <= 0)
        return false;

    if ($place.find("#txtExport").length > 0) {
        $place.find("#txtExport").remove();
        return false;
    }

    let $txt = $('<textarea id="txtExport" style="display:block;width: 800px; height: 200px"></textarea>');

    let exportStr = "";
    for (let key of keys) {
        if (exportStr.length > 0)
            exportStr += delim;

        let item = converter == null ? localStorage[key] : converter(localStorage[key]);
        exportStr += `${key}=${item}`;
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
function Import($place: JQuery): boolean {

    if ($place.length <= 0)
        return false;

    if ($place.find("#txtImport").length > 0) {
        $place.find("#txtImport").remove();
        $place.find("#saveImport").remove();
        return false;
    }

    let $txt = $('<textarea id="txtImport" style="display:block;width: 800px; height: 200px"></textarea>');
    let $saveBtn = $(`<input id="saveImport" type=button disabled="true" value="Save!">`);

    $txt.on("input propertychange", (event) => $saveBtn.prop("disabled", false));
    $saveBtn.on("click", (event) => {
        let items = ($txt.val() as string).split("|"); // элементы вида Ключ=значение
        logDebug(`загружено ${items.length} элементов`);

        try {
            items.forEach((val, i, arr) => {
                let item = val.trim();
                if (item.length <= 0)
                    throw new Error(`получили пустую строку для элемента ${i}, невозможно импортировать.`);

                let kvp = item.split("="); // пара ключ значение
                if (kvp.length !== 2)
                    throw new Error("Должен быть только ключ и значение а по факту не так. " + item);

                let storeKey = kvp[0].trim();
                let storeVal = kvp[1].trim();
                if (storeKey.length <= 0 || storeVal.length <= 0)
                    throw new Error("Длина ключа или данных равна 0 " + item);

                if (localStorage[storeKey] != null)
                    logDebug(`Ключ ${storeKey} существует. Перезаписываем.`);

                localStorage[storeKey] = storeVal;
            });
            alert("импорт завершен");
        }
        catch (err) {
            let msg = (err as Error).message;
            alert(msg);
        }
    });

    $place.append($txt).append($saveBtn);
    return true;
}
function ImportA($place: JQuery, converter: (val: string) => string, delim: string = "\n"): boolean {

    if ($place.length <= 0)
        return false;

    if ($place.find("#txtImport").length > 0) {
        $place.find("#txtImport").remove();
        $place.find("#saveImport").remove();
        return false;
    }

    let $txt = $('<textarea id="txtImport" style="display:block;width: 800px; height: 200px"></textarea>');
    let $saveBtn = $(`<input id="saveImport" type=button disabled="true" value="Save!">`);

    $txt.on("input propertychange", (event) => $saveBtn.prop("disabled", false));
    $saveBtn.on("click", (event) => {
        let items = ($txt.val() as string).split(delim); // элементы вида Ключ=значение
        logDebug(`загружено ${items.length} элементов`);

        try {
            items.forEach((val, i, arr) => {
                let item = val.trim();
                if (item.length <= 0)
                    throw new Error(`получили пустую строку для элемента ${i}, невозможно импортировать.`);

                let kvp = item.split("="); // пара ключ значение
                if (kvp.length !== 2)
                    throw new Error("Должен быть только ключ и значение а по факту не так. " + item);

                let storeKey = kvp[0].trim();
                let storeVal = kvp[1].trim();
                if (storeKey.length <= 0 || storeVal.length <= 0)
                    throw new Error("Длина ключа или данных равна 0 " + item);

                if (localStorage[storeKey] != null)
                    logDebug(`Ключ ${storeKey} существует. Перезаписываем.`);

                localStorage[storeKey] = converter == null ? storeVal : converter(storeVal);
            });
            alert("импорт завершен");
        }
        catch (err) {
            let msg = (err as Error).message;
            alert(msg);
        }
    });

    $place.append($txt).append($saveBtn);
    return true;
}
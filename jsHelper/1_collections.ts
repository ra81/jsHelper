/*
    ---- ARRAY && DICTIONARY ----
*/


/** Обычный словарь где ключем являются строки. */
interface IDictionary<T> {
    [key: string]: T;
}
/** Словарь где ключами являются числа, но по факту все равно будут строки. Просто для себя маркер. */
interface IDictionaryN<T> {
    [key: number]: T;
}

/** Возвращает массив всех ключей словаря. В виде чисел. */
function keysN(dict: IDictionaryN<any>): number[] {
    if (dict == null)
        throw new ArgumentNullError("dict");

    return Object.keys(dict).map(k => parseInt(k));
}
/** Возвращает список свойств (ключей) для любого объекта в виде массива строк. Берет только перечисляемые свойства. */
function keys<T extends object>(obj: T): string[] {
    if (obj == null)
        throw new ArgumentNullError("obj");

    return Object.keys(obj);
}

/** Возвращает массив значений словаря. */
function valuesN<T>(dict: IDictionaryN<T>): T[] {
    if (dict == null)
        throw new ArgumentNullError("dict");

    let res: T[] = [];
    for (let key in dict)
        res.push(dict[key]);

    return res;
}
/** Возвращает массив значений словаря. */
function values<T>(dict: IDictionary<T>): T[] {
    if (dict == null)
        throw new ArgumentNullError("dict");

    let res: T[] = [];
    for (let key in dict)
        res.push(dict[key]);

    return res;
}

/** Проверяет любой объект на наличие свойств видимых. Удобен для словарей. */
function isEmpty<T extends object>(obj: T): boolean {
    if (obj == null)
        throw new ArgumentNullError("obj");

    return Object.keys(obj).length === 0;
}

/**
 * Конвертит словарь в простую текстовую строку вида "key:val, key1:val1"
 * значения в строку конвертятся штатным toString()
 * Создана чисто потому что в словарь нельзя засунуть методы.
 * @param dict
 */
function dict2String<D extends IDictionary<any> | IDictionaryN<any>>(dict: D): string {
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
    let res: any = {};
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

/**
 * Суммирует все элементы массива. Для пустого вернет 0.
 * @param arr
 */
function sum(arr: number[]) {
    return arr.reduce((acc, val) => acc + val, 0);
}

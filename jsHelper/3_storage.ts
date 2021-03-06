﻿/** геоданные в формате [ICityAPI, IRegionAPI, ICountryAPI][] */
let GeoKeyCode = "geodata";
/** список всех продуктор торгуемых в магазинах */
let RetailProductsKeyCode = "retprod";
/** специализации юнитов в формате IDictionaryN<ITypeSpecAPI> */
let UnitSpecKeyCode = "specs";


/** единица хранения */
type TStoreItem = {
    /** версия формата данных в поле data */
    version: number;
    /** игровая дата на которую данные были собраны */
    date: Date;
    /** данные в любом формате */
    data: any;
}



/**
 * Сохраняет данные в локальное хранилище. Использует сжатие и JSON.stringfy => ДАТЫ при восстановлении будут строками!!!
   Если под ключем уже что то есть, данные будут перезаписаны нах
 * @param data данные в любом формате
 * @param version версия формата данных в поле data
 * @param date игровая дата на которую данные были собраны
 * @param key ключик под которым записывать
 */
function store_ls(data: any, version: number, date: Date, key: string) {

    // хранение и парсинг дат через JSON это гемор, при чтении надо конвертать руками будет.
    let item: TStoreItem = {
        version: version,
        date: date,
        data: data,
    }

    localStorage[key] = LZString.compress(JSON.stringify(item));
}

/**
 * Восстанавливает данные из локального хранилища. Разжимает и парсит JSON.parse. ДАТЫ будут строками
 * @param key
 */
function restore_ls(key: string): null | TStoreItem {
    let raw = localStorage[key];
    if (raw == null)
        return null;

    let item = JSON.parse(LZString.decompress(raw));
    return {
        version: item.version,
        date: new Date(item.date),  // время у нас в после парсинга идет строкой.
        data: item.data,
    };
}


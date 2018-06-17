
/// <reference path= "../../_pageParsers/PageParsers/7.0_PageParserFunctions.ts" />
/// <reference path= "../../_pageParsers/PageParsers/7.1_CompanyParsers.ts" />
/// <reference path= "../../_pageParsers/PageParsers/7.1_RetailParsers.ts" />
/// <reference path= "../../_pageParsers/PageParsers/7.1_WareParsers.ts" />
/// <reference path= "../../_pageParsers/PageParsers/8_API.ts" />
/// <reference path= "../../_pageParsers/PageParsers/1_Exceptions.ts" />

/*
    здесь некие аггрегирующие хелперы. помогающие сразу консолидировать данные одним методом.
    общеупотребительные при написании скриптов и прочей хуйни
*/


/** 
 * Запрашивает города страны и регионы, складывает в туплы 
 * @param domain домен с которого тащить https://virtonomica.ru
 * @param realm собственно реалм для которого запрос
 */
async function tryGetGeos_async(domain: string, realm: string): Promise<[ICityAPI, IRegionAPI, ICountryAPI][]> {
    let city_url = domain + formatStr(commonUrls.virt_cities_api.tpl, realm);
    let region_url = domain + formatStr(commonUrls.virt_regions_api.tpl, realm);
    let country_url = domain + formatStr(commonUrls.virt_countries_api.tpl, realm);

    let obj = await tryGetJSON_async(city_url);
    let cities = parseCityAPI(obj, city_url);

    obj = await tryGetJSON_async(region_url);
    let regions = parseRegionAPI(obj, region_url);

    obj = await tryGetJSON_async(country_url);
    let countries = parseCountryAPI(obj, country_url);

    let res: [ICityAPI, IRegionAPI, ICountryAPI][] = [];
    for (let key in cities) {
        let city = cities[key];
        let reg = nullCheck(regions[city.region_id]);
        let country = nullCheck(countries[city.country_id]);

        res.push([city, reg, country]);
    }

    return res;
}

/**
 * Для указанного реалма загружает список всех типов юнитов и всех специализаций которые существуют.
   Возвращает [типы юнитов, специализации]
 * @param domain
 * @param realm
 */
async function tryGetTypesSpec_async(domain: string, realm: string): Promise<[IDictionaryN<IUnitTypeAPI>, IDictionaryN<ITypeSpecAPI>]> {

    // сначала явно придется грузить список типов юнитов
    let url = domain + formatStr(commonUrls.virt_unit_types_api.tpl, realm);
    let obj = await tryGetJSON_async(url);
    let types = parseUnitTypesAPI(obj, url);
    let tids = keysN(types);

    // теперь грузим и сохраняем спецухи
    let specs = await tryGetSpecialisations_async(tids);


    return [types, specs];


    /** загружает спецухи для указанных типов в формат sid => ITypeSpecAPI */
    async function tryGetSpecialisations_async(tids: number[]): Promise<IDictionaryN<ITypeSpecAPI>> {

        let specDist: IDictionaryN<ITypeSpecAPI> = {};
        for (let tid of tids) {
            let url = domain + formatStr(commonUrls.virt_type_spec_api.tpl, realm, tid);
            //console.log("get: " + url);
            let obj = await tryGetJSON_async(url);
            let typeSpec = parseTypeSpecialisationsAPI(obj, url);
            for (let sid in typeSpec) {
                if (specDist[sid] != null)
                    throw new Error(`специализация ${sid} повторяется. ${url}`);

                specDist[sid] = typeSpec[sid];
            }
        }
        return specDist;
    }
}

/**
 * Запрашивает с сервера игровую дату на заданном реалме
 * @param domain
 * @param realm
 */
async function tryGetGameDate_async(domain: string, realm: string): Promise<Date> {
    let url = domain + formatStr(`/{0}/main/mediareport`, realm);   // здеь дата точно есь
    let html = await tryGet_async(url);
    let date = nullCheck(parseGameDate(html));
    // TODO: проверочку бы сюда на корректность а то бывает херню выдает
    //console.log(`дата: ` + date);
    return date;
}
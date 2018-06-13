/// <reference path= "../../_pageParsers/PageParsers/7.0_PageParserFunctions.ts" />
/// <reference path= "../../_pageParsers/PageParsers/7.1_CompanyParsers.ts" />
/// <reference path= "../../_pageParsers/PageParsers/7.1_RetailParsers.ts" />
/// <reference path= "../../_pageParsers/PageParsers/7.1_WareParsers.ts" />
/// <reference path= "../../_pageParsers/PageParsers/8_API.ts" />
/// <reference path= "../../_pageParsers/PageParsers/1_Exceptions.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
    здесь некие аггрегирующие хелперы. помогающие сразу консолидировать данные одним методом.
    общеупотребительные при написании скриптов и прочей хуйни
*/
/**
 * Запрашивает города страны и регионы, складывает в туплы
 * @param domain домен с которого тащить https://virtonomica.ru
 * @param realm собственно реалм для которого запрос
 */
function tryGetGeos_async(domain, realm) {
    return __awaiter(this, void 0, void 0, function* () {
        let city_url = domain + formatStr(commonUrls.virt_cities_api.tpl, realm);
        let region_url = domain + formatStr(commonUrls.virt_regions_api.tpl, realm);
        let country_url = domain + formatStr(commonUrls.virt_countries_api.tpl, realm);
        let obj = yield tryGetJSON_async(city_url);
        let cities = parseCityAPI(obj, city_url);
        obj = yield tryGetJSON_async(region_url);
        let regions = parseRegionAPI(obj, region_url);
        obj = yield tryGetJSON_async(country_url);
        let countries = parseCountryAPI(obj, country_url);
        let res = [];
        for (let key in cities) {
            let city = cities[key];
            let reg = nullCheck(regions[city.region_id]);
            let country = nullCheck(countries[city.country_id]);
            res.push([city, reg, country]);
        }
        return res;
    });
}

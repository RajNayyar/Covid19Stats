export interface Country {
    data: any;
    Country: String,
    Slug: String,
    NewConfirmed: Int16Array,
    TotalConfirmed: Int16Array,
    NewDeaths: Int16Array,
    TotalDeaths: Int16Array,
    NewRecovered: Int16Array,
    TotalRecovered: Int16Array
}
export interface Countries {
    Countries: Country[] 
}
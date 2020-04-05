export interface CovidAffectedCountry {
    data: any;
    Country: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number
}
export interface Countries {
    Countries: CovidAffectedCountry[] 
}
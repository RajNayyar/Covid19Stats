import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,share} from 'rxjs/operators'
import {Countries, CovidAffectedCountry} from './covidData.Model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataServiceService {
  public covidCountries: Observable<{(key: string):CovidAffectedCountry[]}>
  somedata: String
  constructor(private http: HttpClient) { }
  public FetchCovidData() : Observable<{(key: string):CovidAffectedCountry[]}>
  {
   this.covidCountries = this.http
    .get<{(key: string):CovidAffectedCountry[]}>("https://api.covid19api.com/summary")
    .pipe(share())
    console.log(this.covidCountries)
    return this.covidCountries
  }
}

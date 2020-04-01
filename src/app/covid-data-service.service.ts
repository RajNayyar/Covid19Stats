import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map,share} from 'rxjs/operators'
import {Countries, Country} from './covidData.Model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CovidDataServiceService {
  public covidCountries: Observable<{(key: string):Country[]}>
  somedata: String
  constructor(private http: HttpClient) { }
  public FetchCovidData() : Observable<{(key: string):Country[]}>
  {
   this.covidCountries = this.http
    .get<{(key: string):Country[]}>("https://api.covid19api.com/summary")
    .pipe(share())
    //console.log(this.covidCountries)
    return this.covidCountries
    //console.log(this.somedata)
  }
}

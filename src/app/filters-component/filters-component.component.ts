import { Component, OnInit } from '@angular/core';
import { CovidDataServiceService } from '../covid-data-service.service';
import { promise } from 'protractor';
import {map,share} from 'rxjs/operators'
import { Observable } from 'rxjs'
import {Countries, Country} from '../covidData.Model'
import {FormControl} from '@angular/forms';
@Component({
  selector: 'filters-component',
  templateUrl: './filters-component.component.html',
  styleUrls: ['./filters-component.component.scss']
})
export class FiltersComponentComponent implements OnInit {

  covidAffectedCountries: Country[]
  countryArray: String[] = []
  covidData: Observable<{(key: string):Country[]}>
  constructor(private covidService: CovidDataServiceService,) { 
    this.covidData= this.covidService.FetchCovidData()
    this.covidData
    .pipe(
      map((results: {(key: string):Country[]})=> {
      var Countries: Country[] = []
      for(const key in results)
      {
        if(results.hasOwnProperty(key)){
          Countries = (results[key])
        }
        break
      }
      debugger
      return Countries
  }))
  .subscribe(data =>{
     this.covidAffectedCountries = data
    })
    
  }
  ngOnInit() {
    
  }

}

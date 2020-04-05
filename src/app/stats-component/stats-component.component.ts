import { Component, OnInit } from '@angular/core';
import { CovidDataServiceService } from '../covid-data-service.service';
import { promise } from 'protractor';
import {map,share} from 'rxjs/operators'
import { Observable } from 'rxjs'
import {Countries, CovidAffectedCountry} from '../covidData.Model'
import {FormControl} from '@angular/forms';
@Component({
  selector: 'stats-component',
  templateUrl: './stats-component.component.html',
  styleUrls: ['./stats-component.component.scss']
})
export class StatsComponentComponent implements OnInit {

  covidAffectedCountries: CovidAffectedCountry[]
  countryArray: String[] = []
  covidData: Observable<{(key: string):CovidAffectedCountry[]}>

  constructor(private covidService: CovidDataServiceService,) { 
    this.covidData= this.covidService.FetchCovidData()

    this.covidData
    .pipe(
      map((results: {(key: string):CovidAffectedCountry[]})=> {
      var Countries: CovidAffectedCountry[] = []
      for(const key in results)
      {
        if(results.hasOwnProperty(key)){
          Countries = (results[key])
        }
        break
      }
      return Countries
  }))
  .subscribe(data =>{
     this.covidAffectedCountries = data
    }) 
  }
  
  ngOnInit() {
    
  }

}

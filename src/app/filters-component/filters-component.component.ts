import { Component, OnInit } from '@angular/core';
import { CovidDataServiceService } from '../covid-data-service.service';
import { promise } from 'protractor';
import {map,share, startWith} from 'rxjs/operators'
import { Observable } from 'rxjs'
import {Countries, CovidAffectedCountry} from '../covidData.Model'
import {FormControl} from '@angular/forms';
@Component({
  selector: 'filters-component',
  templateUrl: './filters-component.component.html',
  styleUrls: ['./filters-component.component.scss']
})
export class FiltersComponentComponent implements OnInit {

  covidAffectedCountries: CovidAffectedCountry[]
  countryArray: string[]
  covidData: Observable<{(key: string):CovidAffectedCountry[]}>
  countriesObservable: Observable<string[]>

  constructor(private covidService: CovidDataServiceService,) { 

    this.covidData= this.covidService.FetchCovidData()

    var countryData:Observable<CovidAffectedCountry[]> =  this.covidData
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
  }),share())
  
  countryData
  .subscribe((data: CovidAffectedCountry[]) =>{
     this.covidAffectedCountries = data
    })
     this.countriesObservable = countryData.pipe(
      map((results: CovidAffectedCountry[]) =>{
        for(var i=0; i<this.covidAffectedCountries.length;i++)
         {
          this.countryArray.push(this.covidAffectedCountries[i].Country)
         }
         return this.countryArray
      }
    ),share())
  }

  myControl = new FormControl()
  ngOnInit() {
    this.countriesObservable = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    )
  }
  private _filter(value: string):string[]{
    const filterValue = value.toLowerCase()
    return  this.countryArray.filter(country  => 
      country.toLowerCase().includes(filterValue)) 
  }
  displayFn(subject){
    return subject.Country
  }

}


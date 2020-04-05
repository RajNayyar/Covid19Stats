import { Component, OnInit } from '@angular/core';
import { CovidDataServiceService } from '../covid-data-service.service';
import { promise } from 'protractor';
import {map,share, startWith} from 'rxjs/operators'
import { Observable } from 'rxjs'
import {Countries, CovidAffectedCountry} from '../covidData.Model'
import {FormControl} from '@angular/forms';
import {Chart} from 'chart.js'
@Component({
  selector: 'global-stats',
  templateUrl: './global-stats.component.html',
  styleUrls: ['./global-stats.component.scss']
})
export class GlobalStatsComponent implements OnInit {

  covidData : Observable<{(key:string): CovidAffectedCountry[]}>
  covidAffectedCountryData:Observable<CovidAffectedCountry[]>
  covidAffectedGlobalData : CovidAffectedCountry[]
  NumberOfValues: number = 10
  constructor(private covidService: CovidDataServiceService,) { 

}

  ngOnInit() {
    this.covidData= this.covidService.FetchCovidData()
    this.covidData.pipe(
     map((results: {(key: string):CovidAffectedCountry[]})=> {
     var Countries: CovidAffectedCountry[] = []
     for(const key in results)
     {
       if(results.hasOwnProperty(key)){
         Countries = (results[key])
         break
       }
     }
     return Countries
 })).subscribe((data) =>{
   this.covidAffectedGlobalData = data
   debugger
   var RequiredValues = this.FetchTop(this.NumberOfValues,this.covidAffectedGlobalData)
   var labels:string[] = []
   var dataPoints:number[] = []
   for(var i =RequiredValues.length-1; i>=0;i--)
   {
     labels.push(RequiredValues[i].Slug)
     dataPoints.push(RequiredValues[i].TotalConfirmed)
   }
   debugger
   this.RenderCovidData(labels, dataPoints)
 })}
private FetchTop(totalValuesToBeFetched: number, data: CovidAffectedCountry[]) : CovidAffectedCountry[]
{
  data.sort((a, b) => (a.TotalConfirmed > b.TotalConfirmed) ? 1 : (a.TotalConfirmed === b.TotalConfirmed) ? ((a.TotalConfirmed > b.TotalConfirmed) ? 1 : -1) : -1 )
  return data.slice(Math.max(data.length - totalValuesToBeFetched, 0))
}
  RenderCovidData(labels: string[], dataPoints: number[])
  {
    var chart = new Chart('lineChart', {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [
          { 
            data: dataPoints,
            backgroundColor: ["rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)","rgba(0, 0, 0, 0.74)","rgba(197, 32, 32, 0.74)"],
            borderColor: "#3cba9f"
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
          },
            display: true,
            gridLines: {
              display:false
          }
          }],
          yAxes: [{
            display: true,
            gridLines: {
              display:false
          }
          },
        ],
        }
      }
    });
  }
}

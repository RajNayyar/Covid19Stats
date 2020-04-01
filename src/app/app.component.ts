import { Component } from '@angular/core';
import {CovidDataServiceService} from './covid-data-service.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CovidDataServiceService]
})
export class AppComponent {
  title = 'Covid19stats';
}

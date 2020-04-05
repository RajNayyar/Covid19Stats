import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FiltersComponentComponent} from './filters-component/filters-component.component'
import { StatsComponentComponent } from './stats-component/stats-component.component';
import { HttpClientModule }    from '@angular/common/http';
import {CovidAffectedCountry, Countries} from './covidData.Model'
import {MatInputModule,MatAutocompleteModule,MatToolbar,MatSelectModule, MatFormFieldModule, MatTabsModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { GlobalStatsComponent } from './global-stats/global-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FiltersComponentComponent,
    StatsComponentComponent,
    MatToolbar,
    GlobalStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatFormFieldModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

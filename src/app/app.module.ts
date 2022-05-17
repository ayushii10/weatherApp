import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RouterModule } from "@angular/router";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ForecastComponent } from './forecast/forecast.component';
import { map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiservService } from './apiserv.service';

import {MatSliderModule} from '@angular/material/slider';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
  
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    
    MatSliderModule,
    MatButtonModule,

    MatCardModule



    
  ],
  providers: [ApiservService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherComponent } from '../weather/weather.component';
import { ApiservService } from '../apiserv.service';
import { pluck } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Forecast } from '../forecast';
import { ForecastService } from '../forecast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

   public weatherSearchForm!: FormGroup;
   // public weatherData!: Object;
    public weatherData: any;
  
    constructor(
      private formBuilder: FormBuilder,
      private apixuService: ApiservService,
      private _route:Router
      
    ) {}
    
    ngOnInit() {
      this.weatherSearchForm = this.formBuilder.group({
        location: ['']
   
   
      })}


      sendToAPIXU(formValues: { location: any; }) {
        this.apixuService.getWeather({ location: formValues.location }).subscribe(data => {
          this.weatherData = data;
          console.log(this.weatherData);
          
           this._route.navigate(['/sss']);
        });
    
      // }
    }
      sendToA(formValues: { location: any; }) {
        this.apixuService.gettWeather({ location: formValues.location }).subscribe(data => {
          this.weatherData = data;
          console.log(this.weatherData);
          
           this._route.navigate(['/sss']);
        });
      
      // }
      }

      sendToa(formValues: { location: any; }) {
        this.apixuService.getthWeather({ location: formValues.location }).subscribe(data => {
          this.weatherData = data;
          console.log(this.weatherData);
          
           this._route.navigate(['/sss']);
        });
      
      // }
      }

      sendToaa(formValues: { location: any; }) {
        this.apixuService.getfWeather({ location: formValues.location }).subscribe(data => {
          this.weatherData = data;
          console.log(this.weatherData);
          
           this._route.navigate(['/sss']);
        });
      
      // }
      }


      sendToAA(formValues: { location: any; }) {
         this.apixuService.getfoWeather({ location: formValues.location }).subscribe(data => {
           this.weatherData = data;
           console.log(this.weatherData);
           
            this._route.navigate(['/sss']);
         });


   
      }
   }

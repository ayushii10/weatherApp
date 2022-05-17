import { getHtmlTagDefinition } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { FormBuilder,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiservService } from '../apiserv.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
 
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

   });
   
  }

  go(formValues:{location:any;}){


   this.apixuService.getWeather({ location: formValues.location }).subscribe(data => {
     this.weatherData = data;
     console.log(this.weatherData);
    this._route.navigate(['/sss'])
  });}
  
  sendToAPIXU(formValues: { location: any; }) {
    this.apixuService.getWeather({ location: formValues.location }).subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
      
       this._route.navigate(['/sss']);
    });

  // }
}


}

  




import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Forecast } from './forecast';
import { map ,switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ForecastService {
 private weather:Forecast[] = [] ;
 // weatherClass!:Forecast;
  location:any;

  




    constructor(private http: HttpClient) { }
  
    LoadForecastWeather(zip: any): Observable<any> {
      return this.http.get("https://api.openweathermap.org/data/2.5/forecast?zip="+zip+",us&APPID=dabc2b57d81c4493c08ab63bb4d9e326&units=imperial" );
    }
  
    LoadCurrentWeather(zip: any): Observable<any> {
      return this.http.get("https://api.openweathermap.org/data/2.5/weather?zip="+zip+",us&APPID=dabc2b57d81c4493c08ab63bb4d9e326&units=imperial" );
    }
  
  }
  
   
  
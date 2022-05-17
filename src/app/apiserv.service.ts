import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiservService {

 
  constructor(private http: HttpClient) {}
 
 
    
  getWeather({ location }: { location: any; }) {
    return this.http.get(
  
      'http://api.weatherstack.com/current?access_key=532711fc452bd9663596622d48644d9b&query=New%20York'
      +
      location
    )
   
    }

   
      gettWeather({ location }: { location: any; }) {
        return this.http.get(
        // 
          'http://api.weatherstack.com/current?access_key=532711fc452bd9663596622d48644d9b&query=Barcelona'
          +
          location
        )
       
        }

        getthWeather({ location }: { location: any; }) {
          return this.http.get(
           
            'http://api.weatherstack.com/current?access_key=532711fc452bd9663596622d48644d9b&query=Milan'
            +
            location
          )
         
          }

          getfoWeather({ location }: { location: any; }) {
            return this.http.get(
            
              'http://api.weatherstack.com/current?access_key=532711fc452bd9663596622d48644d9b&query=Paris'
              +
              location
            )
           
            }


            getfWeather({ location }: { location: any; }) {
              return this.http.get(
            
                'http://api.weatherstack.com/current?access_key=532711fc452bd9663596622d48644d9b&query=London'
                +
                location
              )
             
              }




      

  

}

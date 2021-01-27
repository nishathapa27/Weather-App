import { Injectable } from '@angular/core';
import { getWeatherModel, currentLocation } from './weather.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  ACCESS_KEY = 'd8a780e467e8d759b80c95630353b113';
  url = "http://api.weatherstack.com/current"

  // private _url: string = `${this.url}?access_key=${this.ACCESS_KEY}&query=New%20York`

  // private _url: string = `${this.url}?access_key=${this.ACCESS_KEY}&query=`
  // // data = this.getData("New Delhi")
  // private locationSource = new BehaviorSubject<getWeatherModel>({});
  // currentLocation = this.locationSource.asObservable();
  
  
  constructor(private http: HttpClient) { }
  
  getData(loc:any): Observable<getWeatherModel>{
    let params = new HttpParams();
    params = params.append('access_key', this.ACCESS_KEY);
    params = params.append('query', loc);
    return this.http.get<getWeatherModel>(this.url, {params});
  }

  // public getData(location: any){
  //   console.log("I am here", location)
  //   // let response = this.http.get<WeatherData>();
  //   // console.log("response ", this.http.get<WeatherData>(`${this._url}${location}`))
  //   // // this.locationSource.next(response)
  //   // return response

  //   this.http.get(`${this._url}${location}`).subscribe(resp => {
  //     this.locationSource.next(resp);
  //   });
  // }
  
} 

import { WeatherAPIService } from './../weather-api.service';
import { Component, OnInit } from '@angular/core';
import { faCompass, faSun, faUmbrella, faWind } from '@fortawesome/free-solid-svg-icons';
import { getWeatherModel } from '../weather.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  faWind = faWind;
  faUmbrella = faUmbrella;
  faCompass = faCompass;
  faSun = faSun;
  temp:any;
  region: any;
  weatherDetails: getWeatherModel;
  windSpeed: any;
  dir: any ;
  date = new Date();
  location = 'New York';

  // public _weather = [];

  constructor(private _weatherService: WeatherAPIService) { 
    this.weatherDetails = new getWeatherModel;
  }

  ngOnInit(){
    // this._weatherService.currentLocation.subscribe(response => {
    //   console.log(' RESPOSE ', response);
    //   this.weatherDetails = response;  
    // //  console.log('Current temperature in',this.weatherDetails.current.wind_dir)
     
    // });

    
    this._weatherService.getData(this.location).subscribe(response => {
      console.log(' RESPOSE ', response);
      this.weatherDetails = response;  
     console.log('Current temperature in',this.weatherDetails.current.wind_dir)

    this.dir = '';
    for (let char of this.weatherDetails.current.wind_dir){
      if ( char === 'N'){
        this.dir += " North"
      }
      else if ( char === "W"){
        this.dir += " West"
      }
      else if ( char === "E"){
        this.dir += " East"
      }
      else if ( char === "S"){
        this.dir += " South"
      }
      else {
        this.dir += "No Direction"
      }
      }
    });
    
  }
  

}
    
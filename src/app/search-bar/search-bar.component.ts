import { WeatherAPIService } from './../weather-api.service';
import { Component, OnInit } from '@angular/core';  
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  location = "New Delhi"//pick it from search bar;
  locDetails={}
  
  constructor(private _weatherapi: WeatherAPIService) { }

  ngOnInit(): void {
    this._weatherapi.getData(location)
    .subscribe(data =>{
        console.log('data', data)  
        // console.log(`location ${data.location.name}`)
        // console.log(location);
      }
    )
  }
  
  loadWeatherdata(location:any){
    console.log(location);
    this._weatherapi.getData(location)
  }
}

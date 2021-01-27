import { Component, OnInit } from '@angular/core';
import { faCloud, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {
  faCloud = faCloud;
  faCloudSunRain =faCloudSunRain;
  faCloudRain = faCloudRain;
  faShowerHeavy = faCloudShowersHeavy;
  faCloudSun = faCloudSun;

  
  constructor() { }

  ngOnInit(): void {
  }

}

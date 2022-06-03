import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingUrlEnums } from 'src/enums/paths/routing-url.enum';
import { IUser } from 'src/interfaces/user.interface';
import { AuthManagerService } from 'src/managers/auth-manager/auth-manager.service';
import { WeatherManagerService } from 'src/managers/weather-manager/weather-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  city: string = ''
  constructor(private authManager: AuthManagerService, private weatherManager: WeatherManagerService,private router: Router ) { }
  ngOnInit(): void {
    this.authManager.checkHasUser();
  }

  searchCityWeather(){
    if(this.city){
      this.weatherManager.cityName = this.city;
      this.weatherManager.getWeather().subscribe(result=>{
        if(result){
          this.weatherManager.setWeatherValue(result)
          this.gotoWeatherPage();
        }
      })
    }
  }

  logout(){
    this.authManager.logout();
    this.router.navigate([RoutingUrlEnums.LOGIN])
  }
  gotoWeatherPage(){
    this.router.navigate([RoutingUrlEnums.WEATHER]);
  }
  get user(): IUser{
    return this.authManager.user;
  }
}

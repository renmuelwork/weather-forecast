import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingUrlEnums } from 'src/enums/paths/routing-url.enum';
import { IUser } from 'src/interfaces/user.interface';
import { AuthManagerService } from 'src/managers/auth-manager/auth-manager.service';
import { WeatherManagerService } from 'src/managers/weather-manager/weather-manager.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private router: Router, private weatherManager: WeatherManagerService, private authManager : AuthManagerService) { }

  ngOnInit(): void {
    this.checkPlatform();
    this.authManager.checkHasUser();
  }

  checkPlatform(){
    var ua = navigator.userAgent;

    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua))
      {
        this.isMobile = true;
      }
      else{
      this.isMobile = false
    }
  }

  logout(){
    this.authManager.logout();
    this.router.navigate([RoutingUrlEnums.LOGIN])
  }

  goBack(){
    this.gotoHome();
  }
  gotoHome(){
    this.router.navigate([RoutingUrlEnums.HOME])
  }

  get getCurrentCity(){
    return this.weatherManager.cityName
  }

  get weatherCondition(){
    return this.weatherManager.weatherCondition
  }


  get user(): IUser{
    return this.authManager.user;
  }
}

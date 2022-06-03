import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeather } from 'src/interfaces/weather.interface';
import { WeatherService } from 'src/services/weather/weather.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherManagerService {
  public cityName: string = 'Pasay';
  public weatherCondition: IWeather = {}
  constructor(private weatherService: WeatherService) { }

  getWeather():Observable<any>{
    return this.weatherService.getWeather(this.cityName);
  }

  setWeatherValue(value:any){
    this.weatherCondition = {
      date: (new Date()).toDateString(),
      description: value.weather[0].description,
      temp: Math.round(((value.main.temp * 9) / 5 ) + 32),
      pressure: value.main.pressure,
      humidity: value.main.humidity,
      main:value.weather[0].main
    }
  }
}

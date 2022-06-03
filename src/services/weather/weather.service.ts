import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrlEnum } from 'src/enums/paths/api-url.enum';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private apiService: ApiService) { }

  getWeather(city?: string): Observable<any>{
    let queryStringOb = {
      city: city
    }
    return this.apiService.getData(`${ApiUrlEnum.API}${ApiUrlEnum.V1}${ApiUrlEnum.WEATHER}`,queryStringOb);
  }
}

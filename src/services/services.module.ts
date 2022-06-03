import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ApiService } from './api/api.service';
import { UtilitiesService } from './utilities/utilities.service';
import { WeatherService } from './weather/weather.service';
@NgModule({
  imports: [SharedModule],
  providers: [
    ApiService,
    UtilitiesService,
    WeatherService,
  ]
})
export class ServicesModule {
}

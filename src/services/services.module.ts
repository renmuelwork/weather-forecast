import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { ApiService } from './api/api.service';
import { UtilitiesService } from './utilities/utilities.service';
@NgModule({
  imports: [SharedModule],
  providers: [
    ApiService,
    UtilitiesService
  ]
})
export class ServicesModule {
}

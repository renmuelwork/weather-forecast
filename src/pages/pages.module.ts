import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent, LoginComponent, WeatherComponent } from '.';
import { SharedModule } from 'src/shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    LoginComponent,
    HomeComponent,
    WeatherComponent
  ]
})
export class PagesModule { }

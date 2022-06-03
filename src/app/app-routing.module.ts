import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingUrlEnums } from 'src/enums/paths/routing-url.enum';
import { HomeComponent, LoginComponent, WeatherComponent } from 'src/pages';

const routes: Routes = [
  { path: '', redirectTo: RoutingUrlEnums.LOGIN, pathMatch: "full" },
  {
    path: `${RoutingUrlEnums.LOGIN}`,
    component: LoginComponent,
    data: { title: "Login | Weather Forecast" }
  },
  {
    path: `${RoutingUrlEnums.HOME}`,
    component: HomeComponent,
    data: { title: "Home | Weather Forecast" }
  },
  {
    path: `${RoutingUrlEnums.WEATHER}`,
    component: WeatherComponent,
    data: { title: "Weather Forecast" }
  },
  {path: '**', component: LoginComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from 'src/pages/pages.module';
import { HttpClientModule } from "@angular/common/http";
import { AuthModule } from '@auth0/auth0-angular';
import { ManagerModule } from 'src/managers/managers.module';
import { ServicesModule } from 'src/services/services.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    HttpClientModule,
    ManagerModule,
    ServicesModule,
    AuthModule.forRoot({
      domain: 'dev-eey17p9x.us.auth0.com',
      clientId: 'xbHbkUunDpwVeZxqL959qwz4lWpyKxnl',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

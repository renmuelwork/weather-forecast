import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';
import { LocalKeysConst } from 'src/constants/local-keys.const';
import { RoutingUrlEnums } from 'src/enums/paths/routing-url.enum';
import { IUser } from 'src/interfaces/user.interface';
import { LocalStorageService } from '../local-storage-manager/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {
  public user: IUser = {};
  constructor(private localStorageManager: LocalStorageService, private auth0: AuthService,private router: Router) { }

  checkHasUser(){
    this.auth0.isAuthenticated$.subscribe(result=>{
      if(result){
        this.getUser();
      }else{
        this.router.navigate([RoutingUrlEnums.LOGIN])
      }
    })
  }

  getUser(){
    this.auth0.getUser().subscribe((result: any)=>{
      if(result){
        this._user  = result;
        if(this.router.url === `/${RoutingUrlEnums.LOGIN}`)
        this.router.navigate([RoutingUrlEnums.HOME])
      }
    })
    return this._user;
  }
  logout(){
    this.auth0.logout();
    this.localStorageManager.clearLocalStorage();
  }

  get _user(){
    return this.user;
  }
  
  set _user(value:IUser) {
    this.localStorageManager.setLocalData(LocalKeysConst.USER_PROFILE, JSON.stringify(value))
    this.user = value
  }
}

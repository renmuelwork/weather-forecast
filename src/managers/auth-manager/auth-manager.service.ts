import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalKeysConst } from 'src/constants/local-keys.const';
import { UserInterface } from 'src/interfaces/user.interface';
import { LocalStorageService } from '../local-storage-manager/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {
  public user: UserInterface = {};
  constructor(private localStorageManager: LocalStorageService) { }

  checkHasUser(){
    this._user = this.localStorageManager.getLocalData(LocalKeysConst.USER_PROFILE)
    return this._user;
  }

  get _user(){
    return this.user;
  }
  
  set _user(value:UserInterface) {
    this.localStorageManager.setLocalData(LocalKeysConst.USER_PROFILE, JSON.stringify(value))
    this.user = value
  }
}

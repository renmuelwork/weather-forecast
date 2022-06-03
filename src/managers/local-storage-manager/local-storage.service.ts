import { Injectable } from '@angular/core';
import { UtilitiesService } from 'src/services/utilities/utilities.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  clearLocalStorage(){
    localStorage.clear()
  }

  setLocalData(key:string,value?:any){
    localStorage.setItem(key,value)
  }

  getLocalData(key: string){
    return UtilitiesService.JSonTryParse(localStorage.getItem(key) || '')
  }
}

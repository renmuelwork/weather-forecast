import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor() { }

  public static JSonTryParse(value: string) {
    try {
      return JSON.parse(value);
    } catch (e) {
      if (value === "undefined") {
        return void 0;
      }

      return value;
    }
  }
}

import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HeaderRule } from 'src/abstract/header-rule.abstract';
import { environment } from 'src/environments/environment';
@Injectable()
export class ApiService extends HeaderRule {
  private _queryStringObj: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    super();
  }

  getData(url: string, queryStringObj?: any): Observable<any> {
    this._queryStringObj = queryStringObj;
    return this.http.get<any>(
      environment.baseUrl + url,
      this.RulesOptions
    );
  }

  postData(url: string, body: any): Observable<any> {
    this._queryStringObj = {};
    return this.http.post<any>(
      environment.baseUrl + url,
      body,
      this.RulesOptions
    );
  }

  putData(
    url: string,
    body: any,
    queryStringObj: any = false
  ): Observable<any> {
    this._queryStringObj = queryStringObj;

    return this.http.put<any>(
      environment.baseUrl + url,
      body,
      this.RulesOptions
    );
  }

  deleteData(url: string, queryStringObj: any = false): Observable<any> {
    const baseUrl = environment.baseUrl;

    this._queryStringObj = queryStringObj;

    return this.http.delete<any>(baseUrl + url, this.RulesOptions);
  }

  postDataContentType(url: string, data: any): Observable<any> {
    this._queryStringObj = {};

    return this.http.post<any>(
      environment.baseUrl + url,
      data,
      this.RulesOptionsContentType
    );
  }

  postDataContentTypePatchJSON(url: string, data: any): Observable<any> {
    this._queryStringObj = {};

    return this.http.post<any>(
      environment.baseUrl + url,
      data,
      this.RulesOptionsContentTypePatchJSON
    );
  }

  public handleError(error: HttpErrorResponse): Observable<any> {
    // Throw readable error message
    let err;
    error.error ? (err = error.error) : (err = error);

    return throwError(err);
  }

  public handleRawError(error: HttpErrorResponse): Observable<any> {
    // throw raw error response object
    let err;
    error.error ? (err = error.error) : (err = error);
    return throwError(err);
  }

  objToSearchParams(obj: any): HttpParams {
    let params: HttpParams = new HttpParams();
    Object.keys(obj).forEach(function(key) {
      params = params.append(key, obj[key]);
    });
    return params;
  }

  get RulesOptionsContentType() {
    return {
      headers: new HttpHeaders(this.HeaderCollectionContentType),
      params: this._queryStringObj
      // observe: "response" as "response"
    };
  }

  get RulesOptionsContentTypePatchJSON() {
    return {
      headers: new HttpHeaders(this.HeaderCollectionPatchJSON),
      params: this._queryStringObj
      // observe: "response" as "response"
    };
  }
  get RulesOptions() {
    return {
      headers: new HttpHeaders(this.HeaderCollection),
      params: this._queryStringObj
      // observe: "response" as "response"
    };
  }

  set Rules(obj: any) {
    // tslint:disable-next-line:forin
    for (const key in obj) {
      obj.hasOwnProperty(key)
        ? Object.assign(this.HeaderCollection, { [key]: obj[key] })
        : // tslint:disable-next-line:no-unused-expression
          '';
    }
  }

  setAuthorizationToken(token: any) {
    this.Rules = { Authorization: `Bearer ${token}` };
  }
}

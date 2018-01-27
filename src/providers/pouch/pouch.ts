import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular/platform/platform';

/*
  Generated class for the PouchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PouchProvider {

  basepath = "";

  constructor(
    public http: HttpClient,
    private _platform: Platform

  ) {
    if (this._platform.is("cordova")) {
      this.basepath = "http://127.0.0.1:5984"
    }
    console.log('Hello PouchProvider Provider');
  }

  getAdress() {
    return this.http.get("/test1");
  }

}

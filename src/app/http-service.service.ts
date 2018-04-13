import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpServiceService {
  isLoggedIn: Boolean;

  constructor(private _http: Http) { }

 /* postJSON() {
    var json = JSON.stringify({ var1: 'test', var2: 3 });
    var params = "json=" + json;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this._http.post('https://demo.openmf.org/fineract-provider/api/v1/authentication', params
      , { headers: headers })
      .map(res => res.json());
  }
  */

  loginfn(usercreds) {
    this.isLoggedIn = false;
    var headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    var creds = 'username=' + usercreds.username + '&password=' + usercreds.password;
    headers.append('Content-Type', 'application/json');
    headers.append('Fineract-Platform-TenantId', 'default');
    headers.append('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=');
    return new Promise((resolve) => {
      this._http.post('https://localhost/fineract-provider/api/v1/authentication?' + creds
        , { headers: headers })
        .subscribe((data) => {
          if (data.json().success) {
            window.localStorage.setItem('auth_key', data.json().token);
            this.isLoggedIn = true;
          }
          resolve(this.isLoggedIn)
        }
        )
    })
  }

}

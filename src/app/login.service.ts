import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Router } from '@angular/router'

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  private username: string
  private password: string
  apiUrl = "https://localhost:8443/fineract-provider/api/v1/authentication?tenantIdentifier=default&";

  authenticate(username, password){
    username = "mifos"
    password = "password"
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let url = this.apiUrl+"username="+username+"&password="+password;
    console.log("url = "+url)
    this.http.post<LoginResponse>(url, {headers: headers})
    .toPromise().then(
      result => {
        console.log(result)
        if (result.authenticated == true){
          this.router.navigate(['./navbar']);
          this.username = username
          this.password = password
        }
        else
          console.log("Login failed!!!")
      },
      error => console.log("Login failed!!!")
    );

  }

  getUsername(){
    return this.username
  }

  getPassword(){
    return this.password
  }

}

class LoginResponse {
  username: string
  userId: number
  base64EncodedAuthenticationKey: string
  authenticated: boolean
  officeId: number
  officeName: string
  roles
  permissions
  shouldRenewPassword: boolean
  isTwoFactorAuthenticationRequired: boolean
}

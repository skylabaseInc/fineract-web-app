import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { LoginService } from './login.service'
import { ClientTemplate } from './client/client-template'
import { RequestOptions, Headers } from '@angular/http';
import { Client, PageItems } from './client/client'

@Injectable()
export class ClientService {

  constructor(
    private loginService: LoginService,
    private http: Http
  ) { }

  tenant = "?tenantIdentifier=default&"
  templateUrl = "https://localhost:8443/fineract-provider/api/v1/clients/template"+this.tenant
  clientUrl = "https://localhost:8443/fineract-provider/api/v1/clients"+this.tenant

  private fetchTemplate(){
    let headers = new Headers();
    console.log("inside fetch")
    headers.append('Content-Type', 'application/json; charset=utf-8');
    //headers.append("Authorization", "Basic " + btoa(this.loginService.getUsername()+":"+this.loginService.getPassword()));
    headers.append("Authorization", "Basic " + btoa("mifos:password"));
    let url = this.templateUrl
    console.log("url = "+url)
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, { headers: headers }).toPromise()
  }

  private fetchListOfClients(){
    let headers = new Headers();
    console.log("inside fetch")
    headers.append('Content-Type', 'application/json; charset=utf-8');
    //headers.append("Authorization", "Basic " + btoa(this.loginService.getUsername()+":"+this.loginService.getPassword()));
    headers.append("Authorization", "Basic " + btoa("mifos:password"));
    let url = this.clientUrl
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, { headers: headers }).toPromise()
  }

  async fetchClientTemplate(){
    let template: ClientTemplate
    await this.fetchTemplate().then(
      result => { 
        template = JSON.parse(result.text().toString())
      },
      error => console.log("Auth failed!!!")
    );
    console.log("templating....")
    console.log(template)
    return template
  }

  async fetchClients(){
    let client: Client
    let clientList: PageItems[]
    await this.fetchListOfClients().then(
      result => {
        client = JSON.parse(result.text().toString())
        clientList = client.pageItems
      }
    )
    console.log(clientList)
    return clientList
  }

}

export class ClientEntry {
  name: string;
  client:number;
  id: number;
  status: string;
  office:string;
  staff:string;
}
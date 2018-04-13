import { Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Element} from './client/client.component'

@Injectable()
export class AuthService {
  private _clientUrl = 'https://demo.openmf.org/fineract-provider/api/v1/clients'

  constructor(private _http: Http) { }

  getClients() : Observable<Element[]> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Fineract-PlatformTenantId', 'default');
    headers.append('Authorization', 'Basic bWlmb3M6cGFzc3dvcmQ=')

    return this._http.get(this._clientUrl, { headers: headers })
    .map((response: Response) => <Element[]>response.json())
    .do(data => console.log('All: ' + JSON.stringify(data)))
    .catch(this.handleError);

  }

  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}

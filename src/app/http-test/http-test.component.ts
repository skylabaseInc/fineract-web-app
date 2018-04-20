import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
  //providers: [HttpServiceService]
})
export class HttpTestComponent implements OnInit {
  getData: string;
  postData: string;
  name:string;

  //constructor(private _httpService: HttpServiceService) { }
  constructor(private _http: Http) { }

  onNamedKeyUp(event:any){
    this.name = event.target.value;
  }
  onClick(){
    this._http.get(`https://my-json-server.typicode.com/techsith.git/json-faker-directory/profiles/?name=${this.name}`)
  .subscribe((data) => {
      console.log(data)
    },
    (error)=>{
      console.log(error)
    }
  )

  }

/*  onTestPost(){
    this._httpService.postJSON()
    .subscribe(
      data => this.postData = JSON.stringify(data),
      error => alert(error),
      () => console.log("Finished")
    );
  }
  */

  ngOnInit() {
  }

}

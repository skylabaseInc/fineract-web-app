import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router'
import {HttpServiceService} from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpServiceService]
})
export class LoginComponent{

  localUser = {
    username: '',
    password: ''
  }
  
  constructor(private _service:HttpServiceService, private _router:Router){}

  login(){
    this._service.loginfn(this.localUser).then((res) => {
      if(res)
      this._router.navigate(['navbar']);
      else 
          console.log(res);
    })
  }


  languages = [
    {value: 'eng', viewValue: 'English'},
    {value: 'fre', viewValue: 'French'},
    {value: 'por', viewValue: 'Portuguese'}
  ];

 /* form: FormGroup;                    
  constructor(
    private fb: FormBuilder,
    private router:Router,    
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

public onLoginClick(){
  this.router.navigate(['./navbar']);
}
*/

}

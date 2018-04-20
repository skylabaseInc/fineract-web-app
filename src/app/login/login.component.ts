import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  username: string
  password: string

  languages = [
    {value: 'eng', viewValue: 'English'},
    {value: 'fre', viewValue: 'French'},
    {value: 'por', viewValue: 'Portuguese'}
  ];

  form: FormGroup;                    
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    this.loginService.authenticate(this.username, this.password)
  }


}

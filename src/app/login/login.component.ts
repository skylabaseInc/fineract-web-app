import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  languages = [
    {value: 'eng', viewValue: 'English'},
    {value: 'fre', viewValue: 'French'},
    {value: 'por', viewValue: 'Portuguese'}
  ];

  form: FormGroup;                    
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


}

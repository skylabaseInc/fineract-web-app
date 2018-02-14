import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


}

@Component({
  selector: 'app-createtaxcomponent',
  templateUrl: './createtaxcomponent.component.html',
  styleUrls: ['./createtaxcomponent.component.css']
})
export class CreatetaxcomponentComponent implements OnInit {

  date = new FormControl(new Date());
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  accounttypes=[{value:'ASSET',viewValue:'ASSET'},
  {value:'LIABILITY',viewValue:'LIABILITY'},
  {value:'EQUITY',viewValue:'EQUITY'},
  {value:'INCOME',viewValue:'INCOME'},
  {value:'EXPENSE',viewValue:'EXPENSE'}]

  constructor() { }

  ngOnInit() {
  }

}

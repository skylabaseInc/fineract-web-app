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
  selector: 'app-createloanproduct',
  templateUrl: './createloanproduct.component.html',
  styleUrls: ['./createloanproduct.component.css']
})
export class CreateloanproductComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  funds=[{
    value:'Select fund', viewValue:'Select fund'
  }];

  currencies=[{
    name:'US Dollar'
  }];
  periods=[{
    value:'Per month',viewValue:'Per month'
  },{value:'Per year',viewValue:'Per year'}];

  days=[{
    value:'Days',viewValue:'Days'
  },{value:'Weeks',viewValue:'Weeks'},{
    value:'Months', viewValue:'Months'
  }];
  amortizations=[{name:'Equal principal payments'}];
  methods=[{
    name:'Flat'
  }, {name:'Declining Balance'}];

  systems=[{name:'Same as rpayment period'}];

  strategies=[{name:'Overdue/Due Fee/Int,Principal'},
{name:'Principal, Interest,Penalties,Fees Order'},
{name:'Interest,Principal,Penalties,Fees Order'},
{name:'Early Repayment Strategy'},
{name:'HeavensFamily Unique'},
{name:'Creocore Unique'}];

yeardays=[{
  name:'360 Days'
},{
  name:'364 Days'
},{name:'365 Days'}];

charges=[{value:'select charge',viewvalue:'select charge'},];
duecharges=[{value:'select overdue charge',viewvalue:'select overdue charge'},];

monthdays=[{name:'30 Days'}];
  constructor() { }

  ngOnInit() {
  }

}

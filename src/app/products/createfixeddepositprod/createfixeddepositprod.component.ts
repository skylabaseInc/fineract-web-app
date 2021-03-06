import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }


}


@Component({
  selector: 'app-createfixeddepositprod',
  templateUrl: './createfixeddepositprod.component.html',
  styleUrls: ['./createfixeddepositprod.component.css']
})
export class CreatefixeddepositprodComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  displayedColumns = ['peeriodtype','period','amountrange','interest','description','name', 'type', 'amount', 'collected','actions'];
dataSource = new MatTableDataSource(ELEMENT_DATA);

currencies=[{
  name:'US Dollar'
}];
interestcomps=[{name:'Monthly'},{name:'Quarterly'},{name:'Semi-Annual'},{name:'Annually'}];
interestposts=[{name:'Quarterly'},{name:'BiAnnual'},{name:'Annually'}];
interestcalcs=[{name:'Daily Balance'},{name:'Annual Daily Balance'}];
days=[{name:'360 Days'}];
periods=[{name:'Days'},{name:'Weeks'},{name:'Months'},{name:'Years'}];
charges=[{value:'select charge',viewvalue:'select charge'},];
terms=[{value:'select term',viewvalue:'select term'},];

  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  periodtype:string;
  period:string;
  amountrange:number;
  interest:number;
  description:string;
  name: string;
  type: string;
  amount: string;
  collected:string;
  actions:string;
}

const ELEMENT_DATA: Element[] = [
  
];
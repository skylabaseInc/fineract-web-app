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
  selector: 'app-createshare',
  templateUrl: './createshare.component.html',
  styleUrls: ['./createshare.component.css']
})
export class CreateshareComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();


  displayedColumns = ['date','unitprice','action','name', 'type', 'amount', 'collected','actions'];
dataSource = new MatTableDataSource(ELEMENT_DATA);


  currencies=[{
    name:'US Dollar'
  }];
charges=[{value:'Frais de dossier',viewValue:'Frais de dossier(Afghanistan Afghani)'}];

  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  date: Date;
  unitprice: string;
  action: string;
  name: string;
  type:string;
  amount:string;
  collected:string;
  actions:string;
}

const ELEMENT_DATA: Element[] = [
  
];

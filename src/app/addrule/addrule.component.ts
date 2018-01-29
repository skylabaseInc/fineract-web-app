import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-addrule',
  templateUrl: './addrule.component.html',
  styleUrls: ['./addrule.component.css']
})
export class AddruleComponent implements OnInit {
  debit=false;
  credit=false;

  myControl: FormControl = new FormControl();

  options = [
    {value: 'mor', viewValue: 'Morogoro branch'},
    {value: 'kat', viewValue: 'Katuba'},
    {value:'loan',viewValue:'Loan Officer'}
  ];

  debits = [
    {value:'more',viewValue:'more cash'},
    {value:'ug',viewValue:'Ug acc'},
    {value:'handler',viewValue:'handler'}
  ];
  credits = [
    {value:'more',viewValue:'more cash'},
    {value:'ug',viewValue:'Ug acc'},
    {value:'handler',viewValue:'handler'}
  ];

  constructor() { }

  ngOnInit() {
  }
}

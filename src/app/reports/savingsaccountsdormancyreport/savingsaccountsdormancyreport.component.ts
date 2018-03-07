import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-savingsaccountsdormancyreport',
  templateUrl: './savingsaccountsdormancyreport.component.html',
  styleUrls: ['./savingsaccountsdormancyreport.component.css']
})
export class SavingsaccountsdormancyreportComponent implements OnInit {
 myControl = new FormControl('', [Validators.required]); 

  offices = [
    { name: 'Head office' },
  ];
  decimals = [
    { value: 'zero', viewValue: 'Zero decimal places' },
    { value: '4', viewValue: '4' },
    { value: '3', viewValue: '3' },
    { value: '2', viewValue: '2' },
    { value: '1', viewValue: '1' },
    { value: '0', viewValue: '0' },
  ];
  savingsaccountdormancy = [ 
  { name: 'Inactive' },
  { name: 'Dormant' },
   { name: 'Escheat' }]

  constructor() { }

  ngOnInit() {
  }

}

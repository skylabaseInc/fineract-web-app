import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-fundsdatessummaryoffice',
  templateUrl: './fundsdatessummaryoffice.component.html',
  styleUrls: ['./fundsdatessummaryoffice.component.css']
})
export class FundsdatessummaryofficeComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);

  currencies = [
    { name: 'US Dollar' },
    { name: 'All' }
  ];
  funds = [{ name: '-' },
  { name: 'All' },
  ];
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

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-fundsdatessummary',
  templateUrl: './fundsdatessummary.component.html',
  styleUrls: ['./fundsdatessummary.component.css']
})
export class FundsdatessummaryComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);

  currencies=[
    {name:'US Dollar'},
    {name:'All'}
       ];
       funds=[{name:'-'},
         {name:'All'}, 
        ];
        decimals = [
          {value: 'zero', viewValue: 'Zero decimal places'},
          {value: '4', viewValue: '4'},
          {value: '3', viewValue: '3'},
          {value: '2', viewValue: '2'},
          {value: '1', viewValue: '1'},
          {value: '0', viewValue: '0'},
        ];

  constructor() { }

  ngOnInit() {
  }

}

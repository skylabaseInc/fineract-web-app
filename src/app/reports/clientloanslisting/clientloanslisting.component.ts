import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clientloanslisting',
  templateUrl: './clientloanslisting.component.html',
  styleUrls: ['./clientloanslisting.component.css']
})
export class ClientloanslistingComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);

  submit=false;
  submitted=false;

  onSubmit(){ this.submit=true;}
  onClick(){this.submitted=true;}

  offices = [
    { name: 'Head office' },
  ];
  currencies = [
    { name: 'US Dollar' },
    { name: 'All' }
  ];
  funds = [{ name: '-' },
  { name: 'All' },
  ];
  purposes = [{ name: '-' },
  { name: 'All' },
  ];
  products = [{ name: '-' },
  { name: 'All' },
  ];
  officers = [{ name: '-' },
  { name: 'All' },
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

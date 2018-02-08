import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  options = [
    {value:'office',viewValue:'Afghanistan Afghani()'},
    {value: 'mor', viewValue: 'Albanian lek()'},
    {value: 'kat', viewValue: 'Algeria Dinar()'},
    {value:'loan',viewValue:'Angolan kwanza()'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

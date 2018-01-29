import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-addjournalentry',
  templateUrl: './addjournalentry.component.html',
  styleUrls: ['./addjournalentry.component.css']
})
export class AddjournalentryComponent implements OnInit {
  show=false;
  myControl: FormControl = new FormControl();
  
  options = [
    {value: 'mor', viewValue: 'Morogoro branch'},
    {value: 'kat', viewValue: 'Katuba'},
    {value:'loan',viewValue:'Loan Officer'}
  ];

  currencies = [
    {value:'afgh',viewValue:'Afghanistan Afghani()'},
    {value:'alba',viewValue:'Albanian lek()'},
    {value:'alg',viewValue:'Algerian Dinar()'}
  ]

  constructor() { }

  ngOnInit() {
  }

}

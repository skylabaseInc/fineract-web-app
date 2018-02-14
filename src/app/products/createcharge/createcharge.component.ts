import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-createcharge',
  templateUrl: './createcharge.component.html',
  styleUrls: ['./createcharge.component.css']
})
export class CreatechargeComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);


  charges=[{name:'Loan'}, {name:'Savings and Deposit'}, {name:'Client'},{name:'Shares'}];

  constructor() { }

  ngOnInit() {
  }

}

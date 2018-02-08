import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-newteller',
  templateUrl: './newteller.component.html',
  styleUrls: ['./newteller.component.css']
})
export class NewtellerComponent implements OnInit {
  form: FormGroup;
  tname= new FormControl('', [Validators.required]);
  startdate= new FormControl('', [Validators.required]);
  enddate= new FormControl('');


  options = [
    {value:'office',viewValue:'Head Office'},
    {value: 'mor', viewValue: 'Morogoro branch'},
    {value: 'kat', viewValue: 'Katuba'},
    {value:'loan',viewValue:'Loan Officer'}
  ];

  statuses = [
    {value:'act',viewValue:'Active'},
    {value:'inact',viewValue:'Inactive'}
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      tname: [null, Validators.required],
      startdate:[null,Validators.required],
      enddate:[null],
      description:[null,Validators.required],
      
      
    })
}
}

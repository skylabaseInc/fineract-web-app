import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createholiday',
  templateUrl: './createholiday.component.html',
  styleUrls: ['./createholiday.component.css']
})
export class CreateholidayComponent implements OnInit {

  show=false;
  hide=true;
  
  name= new FormControl('', [Validators.required]);
  form: FormGroup;

  options = [
    {value: 'mor', viewValue: 'Reschedule to specified date'},
    {value: 'kat', viewValue: 'Reschedule to next repayment date'},
    
  ];
  

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      fromdate:[null,Validators.required],
      todate:[null,Validators.required],
      
    })
  }

}

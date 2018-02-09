import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-allocatecash',
  templateUrl: './allocatecash.component.html',
  styleUrls: ['./allocatecash.component.css']
})
export class AllocatecashComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  form:FormGroup;

  options = [
    {value:'office',viewValue:'Afghanistan Afghani()'},
    {value: 'mor', viewValue: 'Albanian lek()'},
    {value: 'kat', viewValue: 'Algeria Dinar()'},
    {value:'loan',viewValue:'Angolan kwanza()'}
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      startdate:[null,Validators.required],
      currency:[null,Validators.required],
      amount:[null,Validators.required],
      description:[null,Validators.required],
    })
}
}
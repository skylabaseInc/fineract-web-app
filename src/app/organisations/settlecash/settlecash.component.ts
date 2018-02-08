import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-settlecash',
  templateUrl: './settlecash.component.html',
  styleUrls: ['./settlecash.component.css']
})
export class SettlecashComponent implements OnInit {
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
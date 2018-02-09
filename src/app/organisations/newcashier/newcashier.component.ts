import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-newcashier',
  templateUrl: './newcashier.component.html',
  styleUrls: ['./newcashier.component.css']
})
export class NewcashierComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  
  form:FormGroup;
  options = [
    {value:'office',viewValue:'Mi-Cbs,Mi Cbs'},
    {value: 'mor', viewValue: 'MJUE,JOHN'},
    {value: 'kat', viewValue: 'S,Aliya'},
    {value:'loan',viewValue:'ch,Sagar'}
  ];


  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      description:[null],
      startdate:[null,Validators.required],
      enddate:[null,Validators.required],
    })

}
}
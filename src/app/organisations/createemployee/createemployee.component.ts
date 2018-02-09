import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  fname= new FormControl('', [Validators.required]);
  lname= new FormControl('', [Validators.required]);
  mobile=new FormControl('');
  form: FormGroup;

  options = [
    {value: 'mor', viewValue: '01939-003 Central Customer Service Group'},
    {value: 'kat', viewValue: '02931-003 Ste Catherine & DeBleury'},
    {value: 'blr',viewValue:'123BLR'},
    {value:'322',viewValue:'322'},
    
  ];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      fname: [null, Validators.required],
      lname: [null, Validators.required],
      mobile:[null],
      date:[null],
      
    })
}
}
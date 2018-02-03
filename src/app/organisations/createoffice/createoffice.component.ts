import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createoffice',
  templateUrl: './createoffice.component.html',
  styleUrls: ['./createoffice.component.css']
})
export class CreateofficeComponent implements OnInit {
  office = new FormControl('', [Validators.required]);
  form: FormGroup;
  options = [
    {value: 'mor', viewValue: 'Morogoro branch'},
    {value: 'kat', viewValue: 'Katuba'},
    {value:'loan',viewValue:'Loan Officer'}
  ];
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      office: [null, Validators.required],
      id:[null],
      date:[null,Validators.required],
    })
  }
}

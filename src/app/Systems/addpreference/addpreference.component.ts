import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-addpreference',
  templateUrl: './addpreference.component.html',
  styleUrls: ['./addpreference.component.css']
})
export class AddpreferenceComponent implements OnInit {

   show=false;
   display(){
     this.show=true;
   }

  form: FormGroup;
  options = [
    {value: 'mor', viewValue: 'CLIENT'},
    {value: 'kat', viewValue: 'LOAN'},
    {value:'loan',viewValue:'SAVINGS'},
    {value:'loan',viewValue:'CENTER'}
  ];
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      account: [null, Validators.required],
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createoffice',
  templateUrl: './createoffice.component.html',
  styleUrls: ['./createoffice.component.css']
})
export class CreateofficeComponent implements OnInit {
 
  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
    })
  }
}

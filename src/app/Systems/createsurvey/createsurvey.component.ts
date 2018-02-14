import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {

  show=false;

  key= new FormControl('', [Validators.required]);
  name= new FormControl('', [Validators.required]);
  key1= new FormControl('', [Validators.required]);
  text= new FormControl('', [Validators.required]);
  code= new FormControl('', [Validators.required]);

  form: FormGroup;
  form1: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      key: [null, Validators.required],
      name:[null,Validators.required],
      code:[null,Validators.required],
      description:[null],
      key1:[null,Validators.required],
      text:[null,Validators.required],
      description1:[null],
      
      
    })
  }
  display(){
    this.show=true;
  }

}

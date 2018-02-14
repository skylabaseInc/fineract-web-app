import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';

@Component({
  selector: 'app-addcode',
  templateUrl: './addcode.component.html',
  styleUrls: ['./addcode.component.css']
})
export class AddcodeComponent implements OnInit {
  
  form:FormGroup;
  code= new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      code:[null,Validators.required],
    })
  }

}

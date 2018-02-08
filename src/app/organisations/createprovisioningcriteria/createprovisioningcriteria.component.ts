import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControl} from '@angular/forms';


@Component({
  selector: 'app-createprovisioningcriteria',
  templateUrl: './createprovisioningcriteria.component.html',
  styleUrls: ['./createprovisioningcriteria.component.css']
})
export class CreateprovisioningcriteriaComponent implements OnInit {
form:FormGroup;

constructor(private formBuilder: FormBuilder) {}

ngOnInit() {
  this.form = this.formBuilder.group({
    criteria: [null, Validators.required],
    min:[null],
    max:[null],
    percentage:[null],
})
}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-createclient',
  templateUrl: './createclient.component.html',
  styleUrls: ['./createclient.component.css']
})
export class CreateclientComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  forms = [
    {value: 'per', viewValue: 'PERSON'},
    {value: 'ent', viewValue: 'ENTITY'},
  ];

  genders = [
    {value: 'm', viewValue: 'Male'},
    {value: 'f', viewValue: 'Female'},
  ];

  clients = [
    {value: 'one', viewValue: 'Client 1'},
    {value: 'two', viewValue: 'client 2'},
  ];

  classifs = [
    {value: 'investor', viewValue: 'Investors'},
    {value: 'customers', viewValue: 'Customers'},
  ];


  form: FormGroup;                    
  constructor(
    private fb: FormBuilder  
  ) {}

  ngOnInit() {
    this.form = this.fb.group({     
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      middlename:[''],
      mobile:[''],
      id:[]
    });
  }

}


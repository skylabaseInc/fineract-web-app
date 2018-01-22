import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {

  form: FormGroup;                    
  constructor(
    private fb: FormBuilder  
  ) {}

 ngOnInit() {
    this.form = this.fb.group({     
      name: ['', Validators.required],
      externalId:[],
      addclient:[],
      client:[],
      name1:[],
      id:[],
      office:[]
    });
  }


}

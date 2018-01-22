import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-createcenter',
  templateUrl: './createcenter.component.html',
  styleUrls: ['./createcenter.component.css']
})
export class CreatecenterComponent implements OnInit {

  form: FormGroup;                    
  constructor(
    private fb: FormBuilder  
  ) {}
  ngOnInit() {
    this.form = this.fb.group({     
      name: ['', Validators.required],
      id:[]
    });
  }


}

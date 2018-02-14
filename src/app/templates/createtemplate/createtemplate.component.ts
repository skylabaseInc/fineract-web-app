import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-createtemplate',
  templateUrl: './createtemplate.component.html',
  styleUrls: ['./createtemplate.component.css']
})
export class CreatetemplateComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);

  visible=false;
  added=false;

  toggle(){
    this.visible=!this.visible;
  }
  onClick(){
    this.added=true;
  }

  entities=[{value: 'client', viewValue:'client'},
  {value: 'loan', viewValue:'loan'},];

  types=[{value: 'Document',viewValue:'Document'},
  {value: 'SMS',viewValue:'SMS'},];


  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-individudualcollect',
  templateUrl: './individudualcollect.component.html',
  styleUrls: ['./individudualcollect.component.css']
})
export class IndividudualcollectComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);

  offices = [
    {name: 'Head Office'},
    
  ];
  staffs = [
    
  ];



  constructor() { }

  ngOnInit() {
  }

}

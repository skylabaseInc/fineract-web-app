import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-individudualcollect',
  templateUrl: './individudualcollect.component.html',
  styleUrls: ['./individudualcollect.component.css']
})
export class IndividudualcollectComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);

  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];



  constructor() { }

  ngOnInit() {
  }

}

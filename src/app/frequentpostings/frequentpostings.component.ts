import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-frequentpostings',
  templateUrl: './frequentpostings.component.html',
  styleUrls: ['./frequentpostings.component.css']
})
export class FrequentpostingsComponent implements OnInit {
  show = false;

  myControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}

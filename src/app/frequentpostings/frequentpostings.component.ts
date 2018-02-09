import { Component, OnInit } from '@angular/core';
import {FormControl,ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-frequentpostings',
  templateUrl: './frequentpostings.component.html',
  styleUrls: ['./frequentpostings.component.css']
})
export class FrequentpostingsComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  show = false;

  myControl: FormControl = new FormControl();

  constructor() { }

  ngOnInit() {
  }

}

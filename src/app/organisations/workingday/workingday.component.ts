import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workingday',
  templateUrl: './workingday.component.html',
  styleUrls: ['./workingday.component.css']
})
export class WorkingdayComponent implements OnInit {
  options = [
    {value: 'mor', viewValue: 'same day'},
    {value: 'kat', viewValue: 'move to next working day'},
    {value:'loan',viewValue:'move to next repayment meeting day'},
    {value: 'tak', viewValue: 'move to previous working day'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

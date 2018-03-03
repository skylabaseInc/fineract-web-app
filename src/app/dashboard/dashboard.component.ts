import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  value : String ="Day";
  selectedValue: string;

  onClick(){
    this.value="Week";
  }
  onAdd(){
    this.value="Month";

  }
  onSubmit(){
    this.value="Day"

  }

  offices = [
    {value: 'office-1', viewValue: '--Office--'},
    {value: 'headOffice-2', viewValue: 'HeadOffice'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

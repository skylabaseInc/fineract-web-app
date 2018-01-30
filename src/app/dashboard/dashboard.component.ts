import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedValue: string;

  offices = [
    {value: 'office-1', viewValue: '--Office--'},
    {value: 'headOffice-2', viewValue: 'HeadOffice'}
  ];

  constructor() { }

  ngOnInit() {
  }

}

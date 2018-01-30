import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-clientlistingpentaho',
  templateUrl: './clientlistingpentaho.component.html',
  styleUrls: ['./clientlistingpentaho.component.css']
})
export class ClientlistingpentahoComponent implements OnInit {
  animalControl = new FormControl('', [Validators.required]);

  offices = [
    {name: 'Head office'},
     ];
  formats = [
      {value: 'Normal format', viewValue: 'Normal format'},
      {value: 'Excel format', viewValue: 'Excel format'},
      {value: 'Excel 2007 format', viewValue: 'Excel 2007 format'},
      {value: 'CSV format', viewValue: 'CSV format'},
      {value: 'PDF format', viewValue: 'PDF format '},
      
    ];
  decimals = [
    {value: 'zero', viewValue: 'Zero decimal places'},
    {value: '4', viewValue: '4'},
    {value: '3', viewValue: '3'},
    {value: '2', viewValue: '2'},
    {value: '1', viewValue: '1'},
    {value: '0', viewValue: '0'},
  ];

  constructor() { }

  ngOnInit() {
  }

}

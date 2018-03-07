import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-clientlisting',
  templateUrl: './clientlisting.component.html',
  styleUrls: ['./clientlisting.component.css']
})
export class ClientlistingComponent implements OnInit {
  myControl = new FormControl('', [Validators.required]);

  offices = [
    {name: 'Head office'},
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

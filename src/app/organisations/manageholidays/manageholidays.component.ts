import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manageholidays',
  templateUrl: './manageholidays.component.html',
  styleUrls: ['./manageholidays.component.css']
})
export class ManageholidaysComponent implements OnInit {
  options = [
    {value: 'mor', viewValue: 'Morogoro branch'},
    {value: 'kat', viewValue: 'Katuba'},
    {value:'loan',viewValue:'Loan Officer'}
  ];

  displayedColumns = ['name','startdate','enddate','repay','status'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

 export interface Element {
    name:string;
    startdate:number;
    enddate:number;
    repay:string;
    status:string;
    
  }

  const ELEMENT_DATA: Element[] = [
    {name:'Grace',startdate:1-2-2018,enddate:2-4-2018,repay:'Next Week',status:'yes'}]

  


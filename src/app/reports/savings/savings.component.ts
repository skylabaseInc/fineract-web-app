import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  displayedColumns = ['name', 'type', 'category'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  type: string;
  category: string;
  
}

const ELEMENT_DATA: Element[] = [
  {name: 'Client Savings Summary', type: 'Pentaho', category: 'Savings'}, 
  {name: 'Savings Account Dormancy Report', type: 'Table', category: 'Savings'}, 
  {name: 'Savings Transactions', type: 'Pentaho', category: 'Savings'} 
];

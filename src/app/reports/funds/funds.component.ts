import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {
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
  {name: 'Funds Disbursed Between Dates Summary', type: 'Table', category: 'Fund'}, 
  {name: 'Funds Disbursed Between Dates Summary by Office', type: 'Table', category: 'Fund'}, 
  {name: 'Funds Disbursed Between Dates Summary by Office(Pentaho)', type: 'Pentaho', category: 'Fund'}, 
  {name: 'Funds Disbursed Between Dates Summary(Pentaho)', type: 'Pentaho', category: 'Fund'} 
];


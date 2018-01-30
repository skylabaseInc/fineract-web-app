import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-reportsaccounting',
  templateUrl: './reportsaccounting.component.html',
  styleUrls: ['./reportsaccounting.component.css']
})
export class ReportsaccountingComponent implements OnInit {
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
  {name: 'Balance sheet', type: 'Pentaho', category: 'Accounting'}, 
  {name: 'General Ledger Report', type: 'Pentaho', category: 'Accounting'}, 
  {name: 'Income Statement', type: 'Pentaho', category: 'Accounting'}, 
  {name: 'Trial Balance', type: 'Pentaho', category: 'Accounting'} 
];

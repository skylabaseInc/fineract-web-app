import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-fixeddepositeproducts',
  templateUrl: './fixeddepositeproducts.component.html',
  styleUrls: ['./fixeddepositeproducts.component.css']
})
export class FixeddepositeproductsComponent implements OnInit {
  displayedColumns = ['name', 'shortname'];
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
  shortname: string;
 
}

const ELEMENT_DATA: Element[] = [
  
];


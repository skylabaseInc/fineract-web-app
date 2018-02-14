import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-loanproducts',
  templateUrl: './loanproducts.component.html',
  styleUrls: ['./loanproducts.component.css']
})
export class LoanproductsComponent implements OnInit {
  displayedColumns = ['name', 'shortname', 'expirydate', 'status'];
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
  expirydate: Date;
  status:string;
}

const ELEMENT_DATA: Element[] = [
  
];


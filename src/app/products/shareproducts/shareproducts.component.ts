import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-shareproducts',
  templateUrl: './shareproducts.component.html',
  styleUrls: ['./shareproducts.component.css']
})
export class ShareproductsComponent implements OnInit {
  displayedColumns = ['name', 'shortname','shares'];
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
  shares: string;
 
}

const ELEMENT_DATA: Element[] = [
  
];


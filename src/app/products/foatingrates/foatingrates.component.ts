import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-foatingrates',
  templateUrl: './foatingrates.component.html',
  styleUrls: ['./foatingrates.component.css']
})
export class FoatingratesComponent implements OnInit {
  displayedColumns = ['name','created','lendingrate','active','shortname'];
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
  created:Date;
  lendingrate: string;
  active:Boolean;

 
}

const ELEMENT_DATA: Element[] = [
  
];


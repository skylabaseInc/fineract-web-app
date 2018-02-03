import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-runclientlist',
  templateUrl: './runclientlist.component.html',
  styleUrls: ['./runclientlist.component.css']
})
export class RunclientlistComponent implements OnInit {
  displayedColumns = ['office/branch', 'account No', 'name','status','activation','external Id'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }

}

export interface Element {
 
  
}

const ELEMENT_DATA: Element[] = [
  
];

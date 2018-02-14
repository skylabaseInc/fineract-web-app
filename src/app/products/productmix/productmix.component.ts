import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-productmix',
  templateUrl: './productmix.component.html',
  styleUrls: ['./productmix.component.css']
})
export class ProductmixComponent implements OnInit {
  displayedColumns = ['name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
 
}

const ELEMENT_DATA: Element[] = [
  
];



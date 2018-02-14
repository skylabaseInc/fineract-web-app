import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-managetaxcomponents',
  templateUrl: './managetaxcomponents.component.html',
  styleUrls: ['./managetaxcomponents.component.css']
})
export class ManagetaxcomponentsComponent implements OnInit {

  displayedColumns = ['name', 'percentage'];
dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  percentage: number;
 
}

const ELEMENT_DATA: Element[] = [
  
];


import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-managetaxgroups',
  templateUrl: './managetaxgroups.component.html',
  styleUrls: ['./managetaxgroups.component.css']
})
export class ManagetaxgroupsComponent implements OnInit {
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


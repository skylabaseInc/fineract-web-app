import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manage-schedular-job',
  templateUrl: './manage-schedular-job.component.html',
  styleUrls: ['./manage-schedular-job.component.css']
})
export class ManageSchedularJobComponent implements OnInit {
  displayedColumns = ['checkbox' , 'name' , 'next' , 'previous' , 'status' , 'current', 'error'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  next: Date;
  previous: Date;
  status: string;
  current: string;
  error: string;

 
}

const ELEMENT_DATA: Element[] = [
  
];


import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  displayedColumns = ['notification', 'created'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }

  export interface Element {
    notification: string;
    created:number
  }

  const ELEMENT_DATA: Element[] = [
    {notification:"@@###@##@#@",created:2018}];



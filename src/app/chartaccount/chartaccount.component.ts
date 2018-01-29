import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-chartaccount',
  templateUrl: './chartaccount.component.html',
  styleUrls: ['./chartaccount.component.css']
})
export class ChartaccountComponent implements OnInit {

  displayedColumns = ['account','code','type','disable','entries','used'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }


  export interface Element {
  account:string;
  code:number;
  type:string;
  disable:string;
  entries:string;
  used:string;
  }

  const ELEMENT_DATA: Element[] = [
    {account:'@@@',code:123,type:'####',disable:'yes',entries:'%%%%%',used:'&&&&&'}]
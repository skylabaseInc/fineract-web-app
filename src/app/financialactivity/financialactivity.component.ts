import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-financialactivity',
  templateUrl: './financialactivity.component.html',
  styleUrls: ['./financialactivity.component.css']
})
export class FinancialactivityComponent implements OnInit {

  displayedColumns = ['financial','account'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }


  export interface Element {
   financial:string;
   account:string;
  }

  const ELEMENT_DATA: Element[] = [
    {financial:'Sales',account:'mine'}]
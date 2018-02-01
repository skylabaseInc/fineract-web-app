import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manageoffice',
  templateUrl: './manageoffice.component.html',
  styleUrls: ['./manageoffice.component.css']
})
export class ManageofficeComponent implements OnInit {

  displayedColumns = ['name','id','office','on'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }


  export interface Element {
  name:string;
  id:number;
  office:string;
  on:string;
  }

  const ELEMENT_DATA: Element[] = [
    {name:'Buea',id:2,office:'Head office',on:'29 January 2018'}]
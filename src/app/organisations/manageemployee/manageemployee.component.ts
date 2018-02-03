import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-manageemployee',
  templateUrl: './manageemployee.component.html',
  styleUrls: ['./manageemployee.component.css']
})
export class ManageemployeeComponent implements OnInit {

  displayedColumns = ['name','isloan','office','active'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

 export interface Element {
    name:string;
    isloan:boolean;
    office:string;
    active:boolean;
    
  }

  const ELEMENT_DATA: Element[] = [
    {name:'Grace',isloan:true,office:'Katuba',active:true}]

  


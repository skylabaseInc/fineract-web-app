import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  displayedColumns = ['name', 'account', 'id', 'status','office'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }

  export interface Element {
    name: string;
    account:number;
    id: number;
    status: string;
    office:string;
  
  }

  const ELEMENT_DATA: Element[] = [
    {name:"mimi",account:2,id:1,status:"No",office:"checkpot"}]
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  
  displayedColumns = ['name', 'client', 'id', 'status','office','staff'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }

  export interface Element {
    name: string;
    client:number;
    id: number;
    status: string;
    office:string;
    staff:string;
  }

  const ELEMENT_DATA: Element[] = [
    {name:"Grace",client:2,id:1,status:"No",office:"checkpot",staff:"boss"}]



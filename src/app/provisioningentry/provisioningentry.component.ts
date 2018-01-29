import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-provisioningentry',
  templateUrl: './provisioningentry.component.html',
  styleUrls: ['./provisioningentry.component.css']
})
export class ProvisioningentryComponent implements OnInit {

  displayedColumns = ['by', 'on', 'journal', 'report','recreate','view'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor() { }
  

  ngOnInit() {}
  }


  export interface Element {
   by:string;
   on:number;
   journal:string;
   report:string;
   recreate:string;
   view:string;
  }

  const ELEMENT_DATA: Element[] = [
    {by:'@@@@',on:2018,journal:'####',report:'%%%%',recreate:'^^^^^',view:'&&&&'}]
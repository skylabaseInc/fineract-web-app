import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-accountclosure',
  templateUrl: './accountclosure.component.html',
  styleUrls: ['./accountclosure.component.css']
})
export class AccountclosureComponent implements OnInit {
  displayedColumns = ['office','account','comment','close'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
  export interface Element {
    office: string;
    account:number;
    comment:string;
    close:string;
  }

  const ELEMENT_DATA: Element[] = [
    {office:'labase',account:2018,comment:'#########@@',close:'me'}]




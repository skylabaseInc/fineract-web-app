import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  displayedColumns = ['name', 'type', 'category'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  type: string;
  category: string;
  
}

const ELEMENT_DATA: Element[] = [
  {name: 'Client Listing', type: 'Table', category: 'Client'}, 
  {name: 'Client Listing(Pentaho)', type: 'Pentaho', category: 'Client'}, 
  {name: 'Client Loan Listing', type: 'Table', category: 'Client'}, 
  {name: 'Client Loan Listing(Pentaho)', type: 'Pentaho', category: 'Client'} 
];

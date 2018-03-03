import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view-configuration-email',
  templateUrl: './view-configuration-email.component.html',
  styleUrls: ['./view-configuration-email.component.css']
})
export class ViewConfigurationEmailComponent implements OnInit {
  displayedColumns = ['name','value'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);


  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  name: string;
  value:string;
 
}

const ELEMENT_DATA: Element[] = [
  {name : 'username ', value : 'support@cloudmicrofinance.com'},
  {name : 'password  ', value : 'XXXX'},
  {name : 'host  ', value : 'smtp.gmail.com'},
  {name : ' port ', value : '25'},
  {name : 'useTLS ' , value : 'true'}
];

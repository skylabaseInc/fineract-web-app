import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view-configuration-sms',
  templateUrl: './view-configuration-sms.component.html',
  styleUrls: ['./view-configuration-sms.component.css']
})
export class ViewConfigurationSmsComponent implements OnInit {
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
  {name : 'host_name', value : 'localhost'},
  {name : 'port_number ', value : '9191'},
  {name : 'end_point ', value : '/'},
  {name : 'tenant_app_key ', value : ''},
];
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-view-external-service-configuration',
  templateUrl: './view-external-service-configuration.component.html',
  styleUrls: ['./view-external-service-configuration.component.css']
})
export class ViewExternalServiceConfigurationComponent implements OnInit {
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
  {name : 's3_access_key ', value: ''},
  { name : 's3_bucket_name ', value: '' },
  {name : 's3_secret_key', value : ''}
  
];
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'
import { AuthService } from '../auth.service';
//import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [AuthService]
})
export class ClientComponent implements OnInit {

  errorMessage: string;
  
  displayedColumns = ['name', 'client', 'id', 'status','office','staff'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);


  constructor(private _authService : AuthService) { }
  

  ngOnInit():void {
    this._authService.getClients()
       .subscribe(ELEMENT_DATA => ELEMENT_DATA = ELEMENT_DATA , 
      error => this.errorMessage = <any>error);
  }
  }

  export interface Element {
    name: string;
    client:number;
    id: number;
    status: string;
    office:string;
    staff:string;
  }

  const ELEMENT_DATA: Element[] = []
    //{name:"Grace",client:2,id:1,status:"No",office:"checkpot",staff:"boss"}]



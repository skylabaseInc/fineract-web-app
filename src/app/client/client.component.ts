import { Component, OnInit } from '@angular/core';
import {RouterLink } from '@angular/router'
import { ClientService, ClientEntry } from '../client.service';
import {MatTableDataSource} from '@angular/material';
import { ClientTemplate } from './client-template';
import {DataSource, CollectionViewer} from '@angular/cdk/collections';
import { PageItems, Client } from './client';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  errorMessage: string;
  
  displayedColumns = ['name', 'client', 'id', 'status','office','staff'];
  dataSource
  clients: PageItems[]
  clientTemplate: ClientTemplate


  constructor(
    private clientService: ClientService
  ) { }
  

  async ngOnInit() {
    console.log("initing....")
    await this.clientService.fetchClients().then(value => {
      this.clients = value
    })

    for (let i in this.clients){
      clientList.push({
        name:this.clients[i].displayName,
        client:this.clients[i].accountNo,
        id:"",
        status:this.clients[i].status.value,
        office:this.clients[i].officeName,
        staff:this.clients[i].staffName})
    }
    this.dataSource = new MatTableDataSource<Element>(clientList);
    
     this.clientService.fetchClientTemplate().then(value => this.clientTemplate = value)
    // console.log(this.clientTemplate)
  }
}


export interface Element {
  name: string;
  client: string;
  id: string;
  status: string;
  office:string;
  staff:string;
}

var clientList: Element[] = []
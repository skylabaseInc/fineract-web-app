import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { Time } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-standinginstruction',
  templateUrl: './standinginstruction.component.html',
  styleUrls: ['./standinginstruction.component.css']
})
export class StandinginstructionComponent implements OnInit {
  //for loan saving and saving account
show2=false;
Onshow(){
  this.show2=true;
}
Onshow1(){
  this.show2=false;
}


  show=false;
  hide=true;
  
  display(){
    this.show=true;
    this.hide=false;
  }
  displayBoth(){
    this.show=true;
    this.hide=true;
  }

  displayedColumns = ['fromC','fromA','toC','toA','execT','amt','status','error'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

 export interface Element {
    fromC:string;
    fromA:string;
    toC:string;
    toA:string;
    execT:string;
    amt:number;
    status:boolean;
    error:string;
    
  }

  const ELEMENT_DATA: Element[] = [
    {fromC:'Grace',fromA:'@@@',toC:'Mimi',toA:'&&&',execT:'90sec',amt:90000,status:true,error:'@@##$$$'}]
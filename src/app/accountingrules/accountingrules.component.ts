import { Component,OnInit} from '@angular/core'
import {MatTableDataSource} from '@angular/material';
import {RouterLink } from '@angular/router'

@Component({
  selector: 'app-accountingrules',
  templateUrl: './accountingrules.component.html',
  styleUrls: ['./accountingrules.component.css']
})
export class AccountingrulesComponent implements OnInit {
  displayedColumns = ['name','office','debittag','debitaccount','credittag','creditaccount'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  constructor() { }

  ngOnInit() {
  }
}

 export interface Element {
    name:string;
    office: string;
    debittag:string;
    debitaccount:string;
    credittag:string;
    creditaccount:string;
    
  }

  const ELEMENT_DATA: Element[] = [
    {name:'grace',office:'labase',debittag:'#####',debitaccount:'@@@',credittag:'$$$$$',creditaccount:'%%%%'}]

  


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeview-org',
  templateUrl: './treeview-org.component.html',
  styleUrls: ['./treeview-org.component.css']
})
export class TreeviewOrgComponent implements OnInit {
  show=false;
  hide=true;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fundmapping',
  templateUrl: './fundmapping.component.html',
  styleUrls: ['./fundmapping.component.css']
})
export class FundmappingComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  show=false;
  show1=false;
  constructor() { }

  ngOnInit() {
  }

  
}

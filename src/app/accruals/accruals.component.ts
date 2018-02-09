import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accruals',
  templateUrl: './accruals.component.html',
  styleUrls: ['./accruals.component.css']
})
export class AccrualsComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}

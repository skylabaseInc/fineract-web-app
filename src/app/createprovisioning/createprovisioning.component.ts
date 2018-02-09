import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createprovisioning',
  templateUrl: './createprovisioning.component.html',
  styleUrls: ['./createprovisioning.component.css']
})
export class CreateprovisioningComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}

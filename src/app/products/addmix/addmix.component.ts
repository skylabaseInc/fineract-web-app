import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addmix',
  templateUrl: './addmix.component.html',
  styleUrls: ['./addmix.component.css']
})
export class AddmixComponent implements OnInit {

  charges=[{value:'select charge',viewvalue:'select charge'},];

  constructor() { }

  ngOnInit() {
  }

}

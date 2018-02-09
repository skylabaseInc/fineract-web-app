import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchjournal',
  templateUrl: './searchjournal.component.html',
  styleUrls: ['./searchjournal.component.css']
})
export class SearchjournalComponent implements OnInit {
  startDate = new Date(1990, 0, 1);

  constructor() { }

  ngOnInit() {
  }

}

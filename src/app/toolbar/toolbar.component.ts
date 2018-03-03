import { Component, OnInit } from '@angular/core';
import { Input, Output, ViewChild, EventEmitter} from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import {SidenavOverviewExampleComponent} from '../sidenav-overview-example/sidenav-overview-example.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  animations: [
    trigger('iconChange', [
      state('true',
        style({ transform: 'rotate( -90deg )' })
      ),
      state('false',
        style({ transform: 'rotate( 0deg )' })
      ),
      transition('* => *', animate('.25s'))
    ])
  ]
})
export class ToolbarComponent implements OnInit {

  shortnav = true;
  
  @Input() sidenav;
  
  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { 
    console.log(this.sidenav);
  }

  

  ngOnInit() {
  }
  toggle(){
    this.shortnav = !this.shortnav;
    console.log("shortnav: " + this.shortnav)
    this.change.emit(this.shortnav);
  }


}

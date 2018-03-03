import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/core';  


@Component({
  selector: 'app-sidenav-overview-example',
  templateUrl: './sidenav-overview-example.component.html',
  styleUrls: ['./sidenav-overview-example.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(-100%)', opacity: 0}),
          animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(-100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class SidenavOverviewExampleComponent implements OnInit {
  showSidenavTitle = false;
  sidenavWidth = 2.75;
  
  changeWidth(showShortNav){
    if(showShortNav){
      this.sidenavWidth = 2.5;
      this.showSidenavTitle = false;
    }
    else{
      this.sidenavWidth = 13;
      this.showSidenavTitle = true;
    }
  }



  constructor() { }

  ngOnInit() {
  }

}

import { BrowserModule } from '@angular/platform-browser';


import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {Route,RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,MatButtonModule,MatFormFieldModule,
MatMenuModule,MatCheckboxModule,MatInputModule,MatTableModule,MatCardModule,
MatSelectModule,MatOptionModule,MatDatepickerModule,MatNativeDateModule,
MatToolbarModule,MatSidenavModule,MatListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ClientComponent } from './client/client.component';
import { NotificationComponent } from './notification/notification.component';
import { GroupComponent } from './group/group.component';
import { CenterComponent } from './center/center.component';
import { CreatecenterComponent } from './createcenter/createcenter.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { CreateclosureComponent } from './createclosure/createclosure.component';
import { AccountclosureComponent } from './accountclosure/accountclosure.component';
import { RepoComponent } from './repo/repo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndividudualcollectComponent } from './individudualcollect/individudualcollect.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateclientComponent } from './createclient/createclient.component';
import { AccountingComponent } from './accounting/accounting.component';






const ROUTES: Route[] = [
  {path:'',component:LoginComponent},
  { path: 'createclient', component: CreateclientComponent},
  {path:'client',component:ClientComponent},
  {path:'notification',component:NotificationComponent},
  {path:'group',component:GroupComponent},
  {path:'center',component:CenterComponent},
  {path:'createcenter',component:CreatecenterComponent},
  {path:'creategroup',component:CreategroupComponent},
  {path:'createclosure',component:CreateclosureComponent},
  {path:'accountclosure',component:AccountclosureComponent},
  {path:'home/individualcollection', component:IndividudualcollectComponent},
  {path:'home/dashboard', component:DashboardComponent},
  {path:'navbar', component:NavbarComponent},
  {path:'home',component:RepoComponent},

  {path:'accounting',component:AccountingComponent}
]








 




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientComponent,
    NotificationComponent,
    GroupComponent,
    CenterComponent,
    CreatecenterComponent,
    CreategroupComponent,
    CreateclosureComponent,
    AccountclosureComponent,
    RepoComponent,
    NavbarComponent, 
    IndividudualcollectComponent,
    DashboardComponent,
    CreateclientComponent,
    AccountingComponent

  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    CommonModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,
    MatIconModule,MatButtonModule,MatFormFieldModule,MatMenuModule,MatOptionModule,
    MatCheckboxModule,MatInputModule,MatTableModule,MatCardModule,MatSelectModule,
    MatToolbarModule,MatSidenavModule,MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';


import { CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import {Route,RouterModule} from '@angular/router'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import{ BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule,MatButtonModule,MatFormFieldModule,
MatMenuModule,MatCheckboxModule,MatInputModule,MatTableModule,MatCardModule,
MatToolbarModule,MatSidenavModule,MatListModule,
MatSelectModule,MatOptionModule,MatDatepickerModule,MatNativeDateModule,
MatDividerModule,MatAutocompleteModule,MatRadioModule} from '@angular/material';

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
import { AccountingrulesComponent } from './accountingrules/accountingrules.component';
import { MigrateopeningComponent } from './migrateopening/migrateopening.component';
import { ProvisioningentryComponent } from './provisioningentry/provisioningentry.component';
import { CreateprovisioningComponent } from './createprovisioning/createprovisioning.component';
import { FinancialactivityComponent } from './financialactivity/financialactivity.component';
import { AddfinancialactivityComponent } from './addfinancialactivity/addfinancialactivity.component';
import { AccrualsComponent } from './accruals/accruals.component';
import { SearchjournalComponent } from './searchjournal/searchjournal.component';
import { FrequentpostingsComponent } from './frequentpostings/frequentpostings.component';
import { ChartaccountComponent } from './chartaccount/chartaccount.component';
import { CreateGlComponent } from './create-gl/create-gl.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { AddjournalentryComponent } from './addjournalentry/addjournalentry.component';
import { AddruleComponent } from './addrule/addrule.component';
import { OrganisationComponent } from './organisations/organisation/organisation.component';






const ROUTES: Route[] = [
  {path:'',component:LoginComponent},
  {path: 'createclient', component: CreateclientComponent},
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
  {path:'accounting',component:AccountingComponent},
  {path:'accounting',component:AccountingComponent},
  {path:'accountingrules',component:AccountingrulesComponent},
  {path:'migrateopening',component:MigrateopeningComponent},
  {path:'provisioningentry',component:ProvisioningentryComponent},
  {path:'createprovisioning',component:CreateprovisioningComponent},
  {path:'financialactivity',component:FinancialactivityComponent},
  {path:'addfinancialactivity',component:AddfinancialactivityComponent},
  {path:'accruals',component:AccrualsComponent},
  {path:'searchjournal',component:SearchjournalComponent},
  {path:'frequentpostings',component:FrequentpostingsComponent},
  {path:'chartaccount',component:ChartaccountComponent},
  {path:'create-gl',component:CreateGlComponent},
  {path:'treeview',component:TreeviewComponent},
  {path:'addjournalentry',component:AddjournalentryComponent},
  {path:'addrule',component:AddruleComponent},
  {path:'organisation',component:OrganisationComponent}


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
    AccountingComponent,
    AccountingComponent,
    AccountingrulesComponent,
    MigrateopeningComponent,
    ProvisioningentryComponent,
    CreateprovisioningComponent,
    FinancialactivityComponent,
    AddfinancialactivityComponent,
    AccrualsComponent,
    SearchjournalComponent,
    FrequentpostingsComponent,
    ChartaccountComponent,
    CreateGlComponent,
    TreeviewComponent,
    AddjournalentryComponent,
    AddruleComponent,
    OrganisationComponent
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    CommonModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,
    MatIconModule,MatButtonModule,MatFormFieldModule,MatMenuModule,MatOptionModule,
    MatCheckboxModule,MatInputModule,MatTableModule,MatCardModule,MatSelectModule,
    MatToolbarModule,MatSidenavModule,MatListModule, MatCheckboxModule,MatInputModule,
    MatTableModule,MatCardModule,MatSelectModule,MatListModule,MatDividerModule,
    MatAutocompleteModule,MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

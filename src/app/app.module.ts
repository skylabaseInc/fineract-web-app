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
<<<<<<< Updated upstream
MatDividerModule,MatAutocompleteModule,MatRadioModule} from '@angular/material';
=======
MatToolbarModule,MatSidenavModule,MatListModule,MatTabsModule} from '@angular/material';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
import { AllreportsComponent } from './reports/allreports/allreports.component';
import { ClientsComponent } from './reports/clients/clients.component';
import { LoansComponent } from './reports/loans/loans.component';
import { SavingsComponent } from './reports/savings/savings.component';
import { XbrlComponent } from './reports/xbrl/xbrl.component';
import { FundsComponent } from './reports/funds/funds.component';
import { ReportsaccountingComponent } from './reports/reportsaccounting/reportsaccounting.component';
import { ClientlistingComponent } from './reports/clientlisting/clientlisting.component';
import { ClientlistingpentahoComponent } from './reports/clientlistingpentaho/clientlistingpentaho.component';
import { ClientloanslistingComponent } from './reports/clientloanslisting/clientloanslisting.component';
import { ClientloanslistingpentahoComponent } from './reports/clientloanslistingpentaho/clientloanslistingpentaho.component';
import { ClientsavingssummaryComponent } from './reports/clientsavingssummary/clientsavingssummary.component';
import { SavingsaccountsdormancyreportComponent } from './reports/savingsaccountsdormancyreport/savingsaccountsdormancyreport.component';
import { SavingstransactionsComponent } from './reports/savingstransactions/savingstransactions.component';
import { FundsdatessummaryComponent } from './reports/fundsdatessummary/fundsdatessummary.component';
import { FundsdatessummaryofficeComponent } from './reports/fundsdatessummaryoffice/fundsdatessummaryoffice.component';
import { FundssummaryofficepentahoComponent } from './reports/fundssummaryofficepentaho/fundssummaryofficepentaho.component';
import { FundssummarypentahoComponent } from './reports/fundssummarypentaho/fundssummarypentaho.component'
>>>>>>> Stashed changes






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
<<<<<<< Updated upstream
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
=======
  {path:'reports/allreports',component:AllreportsComponent},
  {path:'accounting',component:AccountingComponent},
  {path:'reports/clients', component:ClientsComponent},
  {path:'reports/loans', component:LoansComponent},
  {path:'reports/savings', component:SavingsComponent},
  {path:'reports/xbrl', component:XbrlComponent},
  {path:'reports/funds', component:FundsComponent},
  {path:'reports/accounting', component:ReportsaccountingComponent},
  {path:'reports/clients/Client Listing', component:ClientlistingComponent},
  {path:'reports/clients/Client Listing(Pentaho)', component:ClientlistingpentahoComponent},
  {path:'reports/clients/Client Loan Listing', component:ClientloanslistingComponent},
  {path:'reports/clients/Client Loan Listing(Pentaho)', component:ClientloanslistingpentahoComponent},
  {path:'reports/savings/Client Savings Summary', component:ClientsavingssummaryComponent},
  {path:'reports/savings/Savings Account Dormancy Report', component:SavingsaccountsdormancyreportComponent},
  {path:'reports/savings/Savings Transactions', component:SavingstransactionsComponent}

]








 

>>>>>>> Stashed changes


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
<<<<<<< Updated upstream
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
=======
    AllreportsComponent,
    ClientsComponent,
    LoansComponent,
    SavingsComponent,
    XbrlComponent,
    FundsComponent,
    ReportsaccountingComponent,
    ClientlistingComponent,
    ClientlistingpentahoComponent,
    ClientloanslistingComponent,
    ClientloanslistingpentahoComponent,
    ClientsavingssummaryComponent,
    SavingsaccountsdormancyreportComponent,
    SavingstransactionsComponent,
    FundsdatessummaryComponent,
    FundsdatessummaryofficeComponent,
    FundssummaryofficepentahoComponent,
    FundssummarypentahoComponent
    
    

>>>>>>> Stashed changes
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    CommonModule,FormsModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatDatepickerModule,MatNativeDateModule,
    MatIconModule,MatButtonModule,MatFormFieldModule,MatMenuModule,MatOptionModule,
    MatCheckboxModule,MatInputModule,MatTableModule,MatCardModule,MatSelectModule,
<<<<<<< Updated upstream
    MatToolbarModule,MatSidenavModule,MatListModule, MatCheckboxModule,MatInputModule,
    MatTableModule,MatCardModule,MatSelectModule,MatListModule,MatDividerModule,
    MatAutocompleteModule,MatRadioModule
=======
    MatToolbarModule,MatSidenavModule,MatListModule,MatTabsModule

>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

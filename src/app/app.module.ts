import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatIconModule, MatButtonModule, MatFormFieldModule,
  MatMenuModule, MatCheckboxModule, MatInputModule, MatTableModule, MatCardModule,
  MatToolbarModule, MatSidenavModule, MatListModule,
  MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule,
  MatDividerModule, MatAutocompleteModule, MatRadioModule,
  MatTabsModule,
  MatExpansionModule
} from '@angular/material';



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
import { ManageofficeComponent } from './organisations/manageoffice/manageoffice.component';
import { TreeviewOrgComponent } from './organisations/treeview-org/treeview-org.component';
import { CreateofficeComponent } from './organisations/createoffice/createoffice.component';
import { BalancesheetComponent } from './reports/balancesheet/balancesheet.component';
import { GeneralledgerreportComponent } from './reports/generalledgerreport/generalledgerreport.component';
import { IncomestatementComponent } from './reports/incomestatement/incomestatement.component';
import { TrialbalanceComponent } from './reports/trialbalance/trialbalance.component';
import { RunclientlistComponent } from './reports/runclientlist/runclientlist.component';
import { RunclientlistpentahoComponent } from './reports/runclientlistpentaho/runclientlistpentaho.component';
import { RunclientloanpehtahoComponent } from './reports/runclientloanpehtaho/runclientloanpehtaho.component';
import { RunclientloanComponent } from './reports/runclientloan/runclientloan.component';
import { TemplatesComponent } from './templates/templates/templates.component'
import { KeyboardshortcutComponent } from './keyboardshortcut/keyboardshortcut.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Navigation } from 'selenium-webdriver';
import { ManageholidaysComponent } from './organisations/manageholidays/manageholidays.component';
import { CreateholidayComponent } from './organisations/createholiday/createholiday.component';
import { ManageemployeeComponent } from './organisations/manageemployee/manageemployee.component';
import { CreateemployeeComponent } from './organisations/createemployee/createemployee.component';
import { StandinginstructionComponent } from './organisations/standinginstruction/standinginstruction.component';
import { PasswordpreferencesComponent } from './organisations/passwordpreferences/passwordpreferences.component';
import { WorkingdayComponent } from './organisations/workingday/workingday.component';
import { BulkloanComponent } from './organisations/bulkloan/bulkloan.component';







const ROUTES: Route[] = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'navbar', component:NavbarComponent,children:[
    {path:'',redirectTo:'home',pathMatch:'full' },
    {path:'home',component:RepoComponent},
    {path:'frequentpostings',component:FrequentpostingsComponent},
    {path:'individualcollection', component:IndividudualcollectComponent},
    {path:'chartaccount',component:ChartaccountComponent},
    {path: 'createclient', component: CreateclientComponent},
    {path:'createcenter',component:CreatecenterComponent},
    {path:'creategroup',component:CreategroupComponent},
    {path:'notification',component:NotificationComponent},
    {path:'accountclosure',component:AccountclosureComponent},
    {path:'addjournalentry',component:AddjournalentryComponent},
    {path:'accounting',component:AccountingComponent},
    {path:'searchjournal',component:SearchjournalComponent},
    {path:'accruals',component:AccrualsComponent},
    {path:'accountingrules',component:AccountingrulesComponent},
    {path:'migrateopening',component:MigrateopeningComponent},
    {path:'provisioningentry',component:ProvisioningentryComponent},
    {path:'financialactivity',component:FinancialactivityComponent},
    {path:'client',component:ClientComponent},
    {path:'group',component:GroupComponent},
    {path:'center',component:CenterComponent},
    {path:'treeview',component:TreeviewComponent},
    {path:'create-gl',component:CreateGlComponent},
    {path:'createclosure',component:CreateclosureComponent},
    {path:'addrule',component:AddruleComponent},
    {path:'createprovisioning',component:CreateprovisioningComponent},
    {path:'addfinancialactivity',component:AddfinancialactivityComponent},
    {path:'organisation',component:OrganisationComponent},
    {path:'manageoffice',component:ManageofficeComponent},
    {path:'treeview-org',component:TreeviewOrgComponent},
    {path:'home/dashboard', component:DashboardComponent},
    {path:'createoffice',component:CreateofficeComponent},
    {path:'keyboardshortcut',component:KeyboardshortcutComponent},
    {path:'navigation',component:NavigationComponent},
    {path:'manageholidays',component:ManageholidaysComponent},
    {path:'createholiday',component:CreateholidayComponent},
    {path:'manageemployee',component:ManageemployeeComponent},
    {path:'createemployee',component:CreateemployeeComponent},
    {path:'standinginstruction',component:StandinginstructionComponent},
    {path:'passwordpreferences',component:PasswordpreferencesComponent},
    {path:'workingday',component:WorkingdayComponent},
    {path:'bulkloan',component:BulkloanComponent},
  {path:'home/dashboard', component:DashboardComponent},
  {path:'reports/allreports',component:AllreportsComponent},
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
  {path:'reports/savings/Savings Transactions', component:SavingstransactionsComponent},
  { path: 'reports/funds/Funds Disbursed Between Dates Summary', component: FundsdatessummaryComponent },
  { path: 'reports/funds/Funds Disbursed Between Dates Summary by Office', component: FundsdatessummaryofficeComponent },
  { path: 'reports/funds/Funds Disbursed Between Dates Summary by Office(Pentaho)', component:FundssummaryofficepentahoComponent },
  { path: 'reports/funds/Funds Disbursed Between Dates Summary(Pentaho)', component: FundssummarypentahoComponent },
  { path: 'reports/accounting/Balance sheet', component: BalancesheetComponent },
  { path: 'reports/accounting/General Ledger Report', component:GeneralledgerreportComponent },
  { path: 'reports/accounting/Income Statement', component: IncomestatementComponent },
  { path: 'reports/accounting/Trial Balance', component: TrialbalanceComponent},
  { path: 'reports/clients/Client Listing/run_report', component: RunclientlistComponent},
  { path: 'reports/clients/Client Listing(Pentaho)/run_report', component: RunclientlistpentahoComponent},
  { path: 'reports/clients/Client Loan Listing(Pentaho)/run_report', component: RunclientloanpehtahoComponent},
  {path:'admin/templates', component:TemplatesComponent},

 ]},
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
    OrganisationComponent,
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
    FundssummarypentahoComponent,
    OrganisationComponent,
    ManageofficeComponent,
    TreeviewOrgComponent,
    CreateofficeComponent,
    BalancesheetComponent,
    GeneralledgerreportComponent,
    IncomestatementComponent,
    TrialbalanceComponent,
    RunclientlistComponent,
    RunclientlistpentahoComponent,
    RunclientloanpehtahoComponent,
    RunclientloanComponent,
    TemplatesComponent,
    KeyboardshortcutComponent,
    NavigationComponent,
    ManageholidaysComponent,
    CreateholidayComponent,
    ManageemployeeComponent,
    CreateemployeeComponent,
    StandinginstructionComponent,
    PasswordpreferencesComponent,
    WorkingdayComponent,
    BulkloanComponent
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
    MatAutocompleteModule,MatRadioModule,MatListModule,MatTabsModule,MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

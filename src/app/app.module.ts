import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router'
import {HttpModule} from '@angular/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatIconModule, MatButtonModule, MatFormFieldModule,
    MatMenuModule, MatCheckboxModule, MatInputModule, MatTableModule, MatCardModule,
    MatToolbarModule, MatSidenavModule, MatListModule,
    MatSelectModule, MatOptionModule, MatDatepickerModule, MatNativeDateModule,
    MatDividerModule, MatAutocompleteModule, MatRadioModule,
    MatTabsModule,
    MatExpansionModule, MatDialogModule,MatChipsModule
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
import { PaymenttypeComponent } from './organisations/paymenttype/paymenttype.component';
import { AddpaymentComponent } from './organisations/addpayment/addpayment.component';
import { CurrencyComponent } from './organisations/currency/currency.component';
import { AddcurrencyComponent } from './organisations/addcurrency/addcurrency.component';
import { TellerComponent } from './organisations/teller/teller.component';
import { NewtellerComponent } from './organisations/newteller/newteller.component';
import { CashierComponent } from './organisations/cashier/cashier.component';
import { NewcashierComponent } from './organisations/newcashier/newcashier.component';
import { TransactionComponent } from './organisations/transaction/transaction.component';
import { SettlecashComponent } from './organisations/settlecash/settlecash.component';
import { AllocatecashComponent } from './organisations/allocatecash/allocatecash.component';
import { ManagefundComponent } from './organisations/managefund/managefund.component';
import { SmscampaignComponent } from './organisations/smscampaign/smscampaign.component';
import { LoanprovisioningComponent } from './organisations/loanprovisioning/loanprovisioning.component';
import { ViewprovisioningComponent } from './organisations/viewprovisioning/viewprovisioning.component';
import { DeleteprovisioningDialogComponent } from './organisations/deleteprovisioning-dialog/deleteprovisioning-dialog.component';
import { CreateprovisioningcriteriaComponent } from './organisations/createprovisioningcriteria/createprovisioningcriteria.component';
import { FundmappingComponent } from './organisations/fundmapping/fundmapping.component';
import { EntitydataComponent } from './organisations/entitydata/entitydata.component';
import { DeleteEntitydataDialogComponent } from './organisations/delete-entitydata-dialog/delete-entitydata-dialog.component';
import { CreatentitydataDialogComponent } from './organisations/createntitydata-dialog/createntitydata-dialog.component';
import { CreatesmscampaignComponent } from './organisations/createsmscampaign/createsmscampaign.component';
import { UserComponent } from './Users/user/user.component';
import { CreateuserComponent } from './Users/createuser/createuser.component';
import { ClickuserComponent } from './Users/clickuser/clickuser.component';
import { DeleteuserDialogComponent } from './Users/deleteuser-dialog/deleteuser-dialog.component';
import { ChangepasswordDialogComponent } from './Users/changepassword-dialog/changepassword-dialog.component';
import { SystemComponent } from './Systems/system/system.component';
import { AddroleComponent } from './Systems/addrole/addrole.component';
import { ViewroleComponent } from './Systems/viewrole/viewrole.component';
import { ManagehookComponent } from './Systems/managehook/managehook.component';
import { CreatehookComponent } from './Systems/createhook/createhook.component';
import { ManagesurveyComponent } from './Systems/managesurvey/managesurvey.component';
import { CreatesurveyComponent } from './Systems/createsurvey/createsurvey.component';
import { ManagecodeComponent } from './Systems/managecode/managecode.component';
import { AddcodeComponent } from './Systems/addcode/addcode.component';
import { ClickmanagecodeComponent } from './Systems/clickmanagecode/clickmanagecode.component';
import { AddcodevalueComponent } from './Systems/addcodevalue/addcodevalue.component';
import { ConfigurationComponent } from './Systems/configuration/configuration.component';
import { AccountnumberComponent } from './Systems/accountnumber/accountnumber.component';
import { AddpreferenceComponent } from './Systems/addpreference/addpreference.component';
import { CreatetemplateComponent } from './templates/createtemplate/createtemplate.component';
import { ProductsComponent } from './products/products/products.component';
import { LoanproductsComponent } from './products/loanproducts/loanproducts.component';
import { CreateloanproductComponent } from './products/createloanproduct/createloanproduct.component';
import { SavingsproductsComponent } from './products/savingsproducts/savingsproducts.component';
import { CreatsavingComponent } from './products/creatsaving/creatsaving.component';
import { ShareproductsComponent } from './products/shareproducts/shareproducts.component';
import { CreateshareComponent } from './products/createshare/createshare.component';
import { ChargesComponent } from './products/charges/charges.component';
import { CreatechargeComponent } from './products/createcharge/createcharge.component';
import { ProductmixComponent } from './products/productmix/productmix.component';
import { AddmixComponent } from './products/addmix/addmix.component';
import { FixeddepositeproductsComponent } from './products/fixeddepositeproducts/fixeddepositeproducts.component'
import { CreatefixeddepositprodComponent } from './products/createfixeddepositprod/createfixeddepositprod.component';
import { RecurringdepositeComponent } from './products/recurringdeposite/recurringdeposite.component';
import { CreaterecurringdepositeComponent } from './products/createrecurringdeposite/createrecurringdeposite.component';
import { FoatingratesComponent } from './products/foatingrates/foatingrates.component';
import { CreatefloatingratesComponent } from './products/createfloatingrates/createfloatingrates.component';
import { ManagetaxComponent } from './products/managetax/managetax.component';
import { ManagetaxcomponentsComponent } from './products/managetaxcomponents/managetaxcomponents.component';
import { ManagetaxgroupsComponent } from './products/managetaxgroups/managetaxgroups.component';
import { CreatetaxcomponentComponent } from './products/createtaxcomponent/createtaxcomponent.component';
import { CreatetaxgroupComponent } from './products/createtaxgroup/createtaxgroup.component';
import { ManageReportsComponent } from './Systems/manage-reports/manage-reports.component';
import { CreateReportsComponent } from './Systems/create-reports/create-reports.component';
import { AuditComponent } from './Systems/audit/audit.component';
import { ManageSchedularJobComponent } from './Systems/manage-schedular-job/manage-schedular-job.component';
import { ExternalServicesComponent } from './Systems/external-services/external-services.component';
import { ViewExternalServiceConfigurationComponent } from './Systems/view-external-service-configuration/view-external-service-configuration.component';
import { ViewConfigurationEmailComponent } from './Systems/view-configuration-email/view-configuration-email.component';
import { ViewConfigurationSmsComponent } from './Systems/view-configuration-sms/view-configuration-sms.component';
import { EditconfS3Component } from './Systems/editconf-s3/editconf-s3.component';
import { EditconfSmsComponent } from './Systems/editconf-sms/editconf-sms.component';
import { EditconfEmailComponent } from './Systems/editconf-email/editconf-email.component';
import { EntityToEntityMappingComponent } from './Systems/entity-to-entity-mapping/entity-to-entity-mapping.component';
import { HttpTestComponent } from './http-test/http-test.component';


import { LoginService } from './login.service'
import { HttpClientModule } from '@angular/common/http';
import { ClientService } from './client.service';




const ROUTES: Route[] = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path: 'http' , component: HttpTestComponent},
    { path: 'login', component: LoginComponent },
    {
        path: 'navbar', component: NavbarComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: RepoComponent },
            { path: 'frequentpostings', component: FrequentpostingsComponent },
            { path: 'individualcollection', component: IndividudualcollectComponent },
            { path: 'chartaccount', component: ChartaccountComponent },
            { path: 'createclient', component: CreateclientComponent },
            { path: 'createcenter', component: CreatecenterComponent },
            { path: 'creategroup', component: CreategroupComponent },
            { path: 'notification', component: NotificationComponent },
            { path: 'accountclosure', component: AccountclosureComponent },
            { path: 'addjournalentry', component: AddjournalentryComponent },
            { path: 'accounting', component: AccountingComponent },
            { path: 'searchjournal', component: SearchjournalComponent },
            { path: 'accruals', component: AccrualsComponent },
            { path: 'accountingrules', component: AccountingrulesComponent },
            { path: 'migrateopening', component: MigrateopeningComponent },
            { path: 'provisioningentry', component: ProvisioningentryComponent },
            { path: 'financialactivity', component: FinancialactivityComponent },
            { path: 'client', component: ClientComponent },
            { path: 'group', component: GroupComponent },
            { path: 'center', component: CenterComponent },
            { path: 'treeview', component: TreeviewComponent },
            { path: 'create-gl', component: CreateGlComponent },
            { path: 'createclosure', component: CreateclosureComponent },
            { path: 'addrule', component: AddruleComponent },
            { path: 'createprovisioning', component: CreateprovisioningComponent },
            { path: 'addfinancialactivity', component: AddfinancialactivityComponent },
            { path: 'organisation', component: OrganisationComponent },
            { path: 'manageoffice', component: ManageofficeComponent },
            { path: 'treeview-org', component: TreeviewOrgComponent },
            { path: 'home/dashboard', component: DashboardComponent },
            { path: 'createoffice', component: CreateofficeComponent },
            { path: 'keyboardshortcut', component: KeyboardshortcutComponent },
            { path: 'navigation', component: NavigationComponent },
            { path: 'manageholidays', component: ManageholidaysComponent },
            { path: 'createholiday', component: CreateholidayComponent },
            { path: 'manageemployee', component: ManageemployeeComponent },
            { path: 'createemployee', component: CreateemployeeComponent },
            { path: 'standinginstruction', component: StandinginstructionComponent },
            { path: 'passwordpreferences', component: PasswordpreferencesComponent },
            { path: 'workingday', component: WorkingdayComponent },
            { path: 'bulkloan', component: BulkloanComponent },
            { path: 'home/dashboard', component: DashboardComponent },
            { path: 'reports/allreports', component: AllreportsComponent },
            { path: 'reports/clients', component: ClientsComponent },
            { path: 'reports/loans', component: LoansComponent },
            { path: 'reports/savings', component: SavingsComponent },
            { path: 'reports/xbrl', component: XbrlComponent },
            { path: 'reports/funds', component: FundsComponent },
            { path: 'reports/accounting', component: ReportsaccountingComponent },
            { path: 'reports/clients/Client Listing', component: ClientlistingComponent },
            { path: 'reports/clients/Client Listing(Pentaho)', component: ClientlistingpentahoComponent },
            { path: 'reports/clients/Client Loan Listing', component: ClientloanslistingComponent },
            { path: 'reports/clients/Client Loan Listing(Pentaho)', component: ClientloanslistingpentahoComponent },
            { path: 'reports/savings/Client Savings Summary', component: ClientsavingssummaryComponent },
            { path: 'reports/savings/Savings Account Dormancy Report', component: SavingsaccountsdormancyreportComponent },
            { path: 'reports/savings/Savings Transactions', component: SavingstransactionsComponent },
            { path: 'reports/funds/Funds Disbursed Between Dates Summary', component: FundsdatessummaryComponent },
            { path: 'reports/funds/Funds Disbursed Between Dates Summary by Office', component: FundsdatessummaryofficeComponent },
            { path: 'reports/funds/Funds Disbursed Between Dates Summary by Office(Pentaho)', component: FundssummaryofficepentahoComponent },
            { path: 'reports/funds/Funds Disbursed Between Dates Summary(Pentaho)', component: FundssummarypentahoComponent },
            { path: 'reports/accounting/Balance sheet', component: BalancesheetComponent },
            { path: 'reports/accounting/General Ledger Report', component: GeneralledgerreportComponent },
            { path: 'reports/accounting/Income Statement', component: IncomestatementComponent },
            { path: 'reports/accounting/Trial Balance', component: TrialbalanceComponent },
            { path: 'reports/clients/Client Listing/run_report', component: RunclientlistComponent },
            { path: 'reports/clients/Client Listing(Pentaho)/run_report', component: RunclientlistpentahoComponent },
            { path: 'reports/clients/Client Loan Listing(Pentaho)/run_report', component: RunclientloanpehtahoComponent },
            { path: 'admin/templates', component: TemplatesComponent },
            { path: 'paymenttype', component: PaymenttypeComponent },
            { path: 'addpayment', component: AddpaymentComponent },
            { path: 'currency', component: CurrencyComponent },
            { path: 'addcurrency', component: AddcurrencyComponent },
            { path: 'teller', component: TellerComponent },
            { path: 'newteller', component: NewtellerComponent },
            { path: 'cashier', component: CashierComponent },
            { path: 'newcashier', component: NewcashierComponent },
            { path: 'transaction', component: TransactionComponent },
            { path: 'settlecash', component: SettlecashComponent },
            { path: 'allocatecash', component: AllocatecashComponent },
            { path: 'managefund', component: ManagefundComponent },
            { path: 'smscampaign', component: SmscampaignComponent },
            { path: 'loanprovisioning', component: LoanprovisioningComponent },
            { path: 'viewprovisioning', component: ViewprovisioningComponent },
            { path: 'deleteprovisioning-dialog', component: DeleteprovisioningDialogComponent },
            { path: 'createprovisioningcriteria', component: CreateprovisioningcriteriaComponent },
            { path: 'fundmapping', component: FundmappingComponent },
            { path: 'entitydata', component: EntitydataComponent },
            { path: 'deleteEntitydata-dialog', component: DeleteEntitydataDialogComponent },
            { path: 'createntitydata-dialog', component: CreatentitydataDialogComponent },
            { path: 'createsmscampaign', component: CreatesmscampaignComponent },
            { path: 'user', component: UserComponent },
            { path: 'createuser', component: CreateuserComponent },
            { path: 'clickuser', component: ClickuserComponent },
            { path: 'deleteuser-dialog', component: DeleteuserDialogComponent },
            { path: 'changepassword-dialog', component: ChangepasswordDialogComponent },
            { path: 'system', component: SystemComponent },
            { path: 'addrole', component: AddroleComponent },
            { path: 'viewrole', component: ViewroleComponent },
            { path: 'managehook', component: ManagehookComponent },
            { path: 'createhook', component: CreatehookComponent },
            { path: 'managesurvey', component: ManagesurveyComponent },
            { path: 'createsurvey', component: CreatesurveyComponent },
            { path: 'managecode', component: ManagecodeComponent },
            { path: 'addcode', component: AddcodeComponent },
            { path: 'clickmanagecode', component: ClickmanagecodeComponent },
            { path: 'addcodevalue', component: AddcodevalueComponent },
            { path: 'configuration', component: ConfigurationComponent },
            { path: 'accountnumber', component: AccountnumberComponent },
            { path: 'addpreference', component: AddpreferenceComponent },

            { path: 'admin/templates/create', component: CreatetemplateComponent },
            { path: 'admin/products/loanproducts', component: LoanproductsComponent },
            { path: 'admin/products', component: ProductsComponent },
            { path: 'admin/products/loanproducts/createloan', component: CreateloanproductComponent },
            { path: 'admin/products/savingsproducts', component: SavingsproductsComponent },
            { path: 'admin/products/savingsproducts/createsaving', component: CreatsavingComponent },
            { path: 'admin/products/shareproducts', component: ShareproductsComponent },
            { path: 'admin/products/shareproducts/createshare', component: CreateshareComponent },
            { path: 'admin/products/charges', component: ChargesComponent },
            { path: 'admin/products/charges/createcharge', component: CreatechargeComponent },
            { path: 'admin/products/productmix', component: ProductmixComponent },
            { path: 'admin/products/productmix/add', component: AddmixComponent },
            { path: 'admin/products/fixeddepositeproduct', component: FixeddepositeproductsComponent },
            { path: 'admin/products/fixeddeposite/create', component: CreatefixeddepositprodComponent },
            { path: 'admin/products/recurringdepositeproduct', component: RecurringdepositeComponent },
            { path: 'admin/products/recurringdeposite/create', component: CreaterecurringdepositeComponent },
            { path: 'admin/products/floatingrates', component: FoatingratesComponent },
            { path: 'admin/products/createfloatingrate', component: CreatefloatingratesComponent },
            { path: 'admin/products/managetax', component: ManagetaxComponent },
            { path: 'admin/products/managetax/managetaxcomponents', component: ManagetaxcomponentsComponent },
            { path: 'admin/products/createtaxcomponent', component: CreatetaxcomponentComponent },
            { path: 'admin/products/managetax/managetaxgroups', component: ManagetaxgroupsComponent },
            { path: 'admin/products/createtaxgroup', component: CreatetaxgroupComponent },
            { path: 'managereports', component: ManageReportsComponent},
            { path: 'managereport/create', component: CreateReportsComponent },
            { path: 'schedularjobs', component: ManageSchedularJobComponent },
            { path: 'externalservices', component: ExternalServicesComponent },
            { path: 'externalservices/S3', component: ViewExternalServiceConfigurationComponent },
            { path: 'externalservices/Email', component: ViewConfigurationEmailComponent },
            { path: 'externalservices/SMS', component: ViewConfigurationSmsComponent },
            { path: 'S3/editconf', component: EditconfS3Component },
            { path: 'Email/editconf', component: EditconfEmailComponent },
            { path: 'SMS/editconf', component: EditconfSmsComponent },
            { path: 'audit', component: AuditComponent },
            { path: 'entitytoentitymapping', component: EntityToEntityMappingComponent },
           

        ]
    },
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
        BulkloanComponent,
        PaymenttypeComponent,
        AddpaymentComponent,
        CurrencyComponent,
        AddcurrencyComponent,
        TellerComponent,
        NewtellerComponent,
        CashierComponent,
        NewcashierComponent,
        TransactionComponent,
        SettlecashComponent,
        AllocatecashComponent,
        ManagefundComponent,
        SmscampaignComponent,
        LoanprovisioningComponent,
        ViewprovisioningComponent,
        DeleteprovisioningDialogComponent,
        CreateprovisioningcriteriaComponent,
        FundmappingComponent,
        EntitydataComponent,
        DeleteEntitydataDialogComponent,
        CreatentitydataDialogComponent,
        CreatesmscampaignComponent,
        UserComponent,
        CreateuserComponent,
        ClickuserComponent,
        DeleteuserDialogComponent,
        ChangepasswordDialogComponent,
        SystemComponent,
        AddroleComponent,
        ViewroleComponent,
        ManagehookComponent,
        CreatehookComponent,
        ManagesurveyComponent,
        CreatesurveyComponent,
        ManagecodeComponent,
        AddcodeComponent,
        ClickmanagecodeComponent,
        AddcodevalueComponent,
        ConfigurationComponent,
        AccountnumberComponent,
        AddpreferenceComponent,
        CreatetemplateComponent,
        ProductsComponent,
        LoanproductsComponent,
        CreateloanproductComponent,
        SavingsproductsComponent,
        CreatsavingComponent,
        ShareproductsComponent,
        CreateshareComponent,
        ChargesComponent,
        CreatechargeComponent,
        ProductmixComponent,
        AddmixComponent,
        FixeddepositeproductsComponent,
        CreatefixeddepositprodComponent,
        RecurringdepositeComponent,
        CreaterecurringdepositeComponent,
        FoatingratesComponent,
        CreatefloatingratesComponent,
        ManagetaxComponent,
        ManagetaxcomponentsComponent,
        ManagetaxgroupsComponent,
        CreatetaxcomponentComponent,
        CreatetaxgroupComponent,
        ManageReportsComponent,
        CreateReportsComponent,
        AuditComponent,
        ManageSchedularJobComponent,
        ExternalServicesComponent,
        ViewExternalServiceConfigurationComponent,
        ViewConfigurationEmailComponent,
        ViewConfigurationSmsComponent,
        EditconfS3Component,
        EditconfSmsComponent,
        EditconfEmailComponent,
        EntityToEntityMappingComponent,
        HttpTestComponent,
       
    ],
    imports: [
        RouterModule.forRoot(ROUTES),
        BrowserModule,HttpModule,
        CommonModule, FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule, MatDatepickerModule, MatNativeDateModule,
        MatIconModule, MatButtonModule, MatFormFieldModule, MatMenuModule, MatOptionModule,
        MatCheckboxModule, MatInputModule, MatTableModule, MatCardModule, MatSelectModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatCheckboxModule, MatInputModule,
        MatTableModule, MatCardModule, MatSelectModule, MatListModule, MatDividerModule,
        MatAutocompleteModule, MatRadioModule, MatListModule, MatTabsModule,
        MatExpansionModule, MatDialogModule, MatChipsModule, HttpClientModule
    ],

    providers: [
        LoginService,
        ClientService
    ],
    bootstrap: [AppComponent],
    entryComponents: [DeleteprovisioningDialogComponent]
})
export class AppModule { }

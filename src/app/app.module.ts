import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes} from '@angular/router';
// ----- npm install
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { Ng2CompleterModule } from 'ng2-completer';
import {EssenceNg2PrintModule} from 'essence-ng2-print';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { CookieModule } from 'ngx-cookie';
// Import Components
import { AppComponent } from './app.component';
import { StylizePipe } from './stylize.pipe';
import { environment } from '../environments/environment';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { QuotationDetailComponent } from './components/quotation-detail/quotation-detail.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { PosofsaleComponent } from './components/posofsale/posofsale.component';
import { PosofsaleDetailComponent } from './components/posofsale-detail/posofsale-detail.component';
// Import Services
import { ProductTypeService } from './services/product-type/product-type.service';
import { ProductCategoryService } from './services/product-category/product-category.service';
import { ProductService } from './services/product/product.service';
import { ProductSetService } from './services/product-set/product-set.service';
import { StaffService } from './services/staff/staff.service';
import { UserService } from './services/user/user.service';
import { UtilityService } from './services/utility/utility.service';
import { PosService } from './services/pos/pos.service';
import { UomService } from './services/uom/uom.service';
import { CustomerTypeService } from './services/customer-type/customer-type.service';
import { CustomerService } from './services/customer/customer.service';
import { CompanyService } from './services/company/company.service';
import { NavbarService } from './services/navbar/navbar.service';
import { MessageService } from './services/message/message.service';
import { SupplierTypeService } from './services/supplier-type/supplier-type.service';
import { SupplierService } from './services/supplier/supplier.service';
import { AppConfigService } from './services/app-config/app-config.service';
import { ReceiptOrderService } from './services/receipt-order/receipt-order.service';
// Import Pipes
import { ThbCurrencyPipe } from './pipes/thb-currency.pipe';
import { KzhThDatePipe } from './pipes/kzh-th-date.pipe';
import { CurrencyPipe, DatePipe } from '@angular/common';
// Import Guard
import { AuthGuardGuard } from './guards/auth-guard.guard';
// Import Component
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { PrivilegeComponent } from './components/privilege/privilege.component';
import { EditUomComponent } from './components/uom/edit-uom/edit-uom.component';
import { SearchUomComponent } from './components/uom/search-uom/search-uom.component';
import { SearchCustomerComponent } from './components/customer/search-customer/search-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
import { SearchProductSetComponent } from './components/product-set/search-product-set/search-product-set.component';
import { EditProductSetComponent } from './components/product-set/edit-product-set/edit-product-set.component';
// Import Enum

import * as firebase from 'firebase';
import { PrintA4PaperComponent } from './components/print-a4-paper/print-a4-paper.component';
import { Print80x55mmThermalPaperComponent } from './components/print-80x55mm-thermal-paper/print-80x55mm-thermal-paper.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Error404Component } from './components/error404/error404.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { SearchProductComponent } from './components/product/search-product/search-product.component';
import { SearchProductTypeComponent } from './components/product-type/search-product-type/search-product-type.component';
import { EditProductTypeComponent } from './components/product-type/edit-product-type/edit-product-type.component';
import { EditProductCategoryComponent } from './components/product-category/edit-product-category/edit-product-category.component';
import { SearchProductCategoryComponent } from './components/product-category/search-product-category/search-product-category.component';
import { KzhInputFileComponent } from './components/general/kzh-input-file/kzh-input-file.component';
import { SearchSupplierTypeComponent } from './components/supplier-type/search-supplier-type/search-supplier-type.component';
import { EditSupplierTypeComponent } from './components/supplier-type/edit-supplier-type/edit-supplier-type.component';
import { EditSupplierComponent } from './components/supplier/edit-supplier/edit-supplier.component';
import { SearchSupplierComponent } from './components/supplier/search-supplier/search-supplier.component';
import { SearchCustomerTypeComponent } from './components/customer-type/search-customer-type/search-customer-type.component';
import { EditCustomerTypeComponent } from './components/customer-type/edit-customer-type/edit-customer-type.component';
import { SearchRoleComponent } from './components/role/search-role/search-role.component';
import { EditRoleComponent } from './components/role/edit-role/edit-role.component';
import { SearchStaffComponent } from './components/staff/search-staff/search-staff.component';
import { EditStaffComponent } from './components/staff/edit-staff/edit-staff.component';
import { SearchUserComponent } from './components/user/search-user/search-user.component';
import { EditUserComponent } from './components/user/edit-user/edit-user.component';
import { SearchCompanyComponent } from './components/company/search-company/search-company.component';
import { EditCompanyComponent } from './components/company/edit-company/edit-company.component';
import { SearchReceiptComponent } from './components/receipt/search-receipt/search-receipt.component';
import { EditReceiptComponent } from './components/receipt/edit-receipt/edit-receipt.component';
const configErrMsg = `You have not configured and imported the Firebase SDK.
Make sure you go through the codelab setup instructions.`;

const bucketErrMsg = `Your Firebase Storage bucket has not been enabled. Sorry
about that. This is actually a Firebase bug that occurs rarely. Please go and
re-generate the Firebase initialization snippet (step 4 of the codelab) and make
sure the storageBucket attribute is not empty. You may also need to visit the
Storage tab and paste the name of your bucket which is displayed there.`;

if (!environment.firebase) {
  if (!environment.firebase.apiKey) {
    window.alert(configErrMsg);
  } else if (environment.firebase.storageBucket === '') {
    window.alert(bucketErrMsg);
  }
}

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'forget-password', component: ForgetPasswordComponent},
  {path: 'main', component: MainComponent , /* canActivate: [AuthGuardGuard], */children: [
    { path: '', component: MainDetailComponent, outlet: 'main-detail'},
    // Edit Search
    { path: 'search-product-type', component: SearchProductTypeComponent, outlet: 'main-detail' },
    { path: 'search-product-category', component: SearchProductCategoryComponent, outlet: 'main-detail' },
    { path: 'search-product-set', component: SearchProductSetComponent, outlet: 'main-detail' },
    { path: 'search-product', component: SearchProductComponent, outlet: 'main-detail' },
    { path: 'search-uom', component: SearchUomComponent, outlet: 'main-detail' },
    { path: 'search-customer-type', component: SearchCustomerTypeComponent, outlet: 'main-detail' },
    { path: 'search-customer', component: SearchCustomerComponent, outlet: 'main-detail' },
    { path: 'search-supplier-type', component: SearchSupplierTypeComponent, outlet: 'main-detail' },
    { path: 'search-supplier', component: SearchSupplierComponent, outlet: 'main-detail' },
    { path: 'search-role', component: SearchRoleComponent, outlet: 'main-detail' },
    { path: 'search-user', component: SearchUserComponent, outlet: 'main-detail' },
    { path: 'search-privilege', component: PrivilegeComponent, outlet: 'main-detail' },
    { path: 'search-company', component: SearchCompanyComponent, outlet: 'main-detail'},
    { path: 'search-staff', component: SearchStaffComponent, outlet: 'main-detail'},
    // Edit Master
    { path: 'edit-product-type/:id', component: EditProductTypeComponent, outlet: 'main-detail' },
    { path: 'edit-product-category/:id', component: EditProductCategoryComponent, outlet: 'main-detail' },
    { path: 'edit-product-set/:id', component: EditProductSetComponent, outlet: 'main-detail' },
    { path: 'edit-product/:id', component: EditProductComponent, outlet: 'main-detail' },
    { path: 'edit-uom/:id', component: EditUomComponent, outlet: 'main-detail' },
    { path: 'edit-customer-type/:id', component: EditCustomerTypeComponent, outlet: 'main-detail' },
    { path: 'edit-customer/:id', component: EditCustomerComponent, outlet: 'main-detail' },
    { path: 'edit-supplier-type/:id', component: EditSupplierTypeComponent, outlet: 'main-detail' },
    { path: 'edit-supplier/:id', component: EditSupplierComponent, outlet: 'main-detail' },
    { path: 'edit-role/:id', component: EditRoleComponent, outlet: 'main-detail' },
    { path: 'edit-user/:id', component: EditUserComponent, outlet: 'main-detail' },
    { path: 'edit-privilege/:id', component: PrivilegeComponent, outlet: 'main-detail' },
    { path: 'edit-company/:id', component: EditCompanyComponent, outlet: 'main-detail'},
    { path: 'edit-staff/:id', component: EditStaffComponent, outlet: 'main-detail'}
  ]},
  {path: 'quotation', component: QuotationComponent},
  {path: 'quotation-detail', component: QuotationDetailComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'receive', component: ReceiveComponent},
  {path: 'posofsale', component: PosofsaleComponent},
  {path: 'posofsale-detail', component: PosofsaleDetailComponent},
  { path: '404', component: Error404Component },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    StylizePipe,
    LoginComponent,
    PrintA4PaperComponent,
    Print80x55mmThermalPaperComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    SidenavComponent,
    QuotationComponent,
    InvoiceComponent,
    PurchaseComponent,
    ReceiveComponent,
    QuotationDetailComponent,
    PosofsaleComponent,
    PosofsaleDetailComponent,
    ThbCurrencyPipe,
    MainDetailComponent,
    PrivilegeComponent,
    EditUomComponent,
    SearchUomComponent,
    SearchCustomerComponent,
    EditCustomerComponent,
    SignupComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    Error404Component,
    SearchProductSetComponent,
    EditProductSetComponent,
    EditProductComponent,
    SearchProductComponent,
    SearchProductTypeComponent,
    EditProductTypeComponent,
    EditProductCategoryComponent,
    SearchProductCategoryComponent,
    KzhThDatePipe,
    KzhInputFileComponent,
    SearchSupplierTypeComponent,
    EditSupplierTypeComponent,
    EditSupplierComponent,
    SearchSupplierComponent,
    SearchCustomerTypeComponent,
    EditCustomerTypeComponent,
    SearchRoleComponent,
    EditRoleComponent,
    SearchStaffComponent,
    EditStaffComponent,
    SearchUserComponent,
    EditUserComponent,
    SearchCompanyComponent,
    EditCompanyComponent,
    SearchReceiptComponent,
    EditReceiptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2SmartTableModule,
    Ng2AutoCompleteModule,
    NguiAutoCompleteModule,
    Ng2CompleterModule,
    EssenceNg2PrintModule,
    BrowserModule, CookieModule.forRoot(),
    ChartsModule,
    Ng2TableModule,
    AngularFireModule.initializeApp(environment.firebase, 'kzhweb'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductTypeService, ProductCategoryService, ProductService, ProductSetService,
  UserService, StaffService, UtilityService, UomService, SupplierTypeService, SupplierService,
  PosService, CustomerService, CustomerTypeService, CompanyService, NavbarService, MessageService, AppConfigService,
  ReceiptOrderService,
  CurrencyPipe, DatePipe, KzhThDatePipe,
  AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { QuotationComponent } from './components/quotation/quotation.component';
import { QuotationDetailComponent } from './components/quotation-detail/quotation-detail.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ReceiveComponent } from './components/receive/receive.component';
import { PosofsaleComponent } from './components/posofsale/posofsale.component';
import { PosofsaleDetailComponent } from './components/posofsale-detail/posofsale-detail.component';
//
import { Pos } from './classes/Pos';

// Import Services
import { ProductTypeService } from './services/product-type/product-type.service';
import { StaffService } from './services/staff/staff.service';
import { UserService } from './services/user/user.service';
import { UtilityService } from './services/utility/utility.service';
import { PosService } from './services/pos/pos.service';
import { CustomerService } from './services/customer/customer.service';
import { CompanyService } from './services/company/company.service';
import { NavbarService } from './services/navbar/navbar.service';
// Import Pipes
import { ThbCurrencyPipe } from './pipes/thb-currency.pipe';
import { CurrencyPipe } from '@angular/common';
import { MainDetailComponent } from './components/main-detail/main-detail.component';
import { ProductComponent } from './components/product/product.component';
import { ProductTypeComponent } from './components/product-type/product-type.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { CustomerTypeComponent } from './components/customer-type/customer-type.component';
import { UomComponent } from './components/uom/uom.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { SupplierTypeComponent } from './components/supplier-type/supplier-type.component';
import { UserComponent } from './components/user/user.component';
import { StaffComponent } from './components/staff/staff.component';
import { PrivilegeComponent } from './components/privilege/privilege.component';
import { RoleComponent } from './components/role/role.component';
import { EditUomComponent } from './components/uom/edit-uom/edit-uom.component';
import { SearchUomComponent } from './components/uom/search-uom/search-uom.component';
import { SearchCustomerComponent } from './components/customer/search-customer/search-customer.component';
import { EditCustomerComponent } from './components/customer/edit-customer/edit-customer.component';
//import { Print80x55mmThermalPaperComponent } from './components/print-80x55mm-thermal-paper/print-80x55mm-thermal-paper.component';
//import { PrintA4PaperComponent } from './components/print-a4-paper/print-a4-paper.component';
import * as firebase from 'firebase';
import { SignupComponent } from './components/signup/signup.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Error404Component } from './components/error404/error404.component';
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
  {path: 'main', component: MainComponent , children: [
    { path: '', component: MainDetailComponent, outlet: 'main-detail'},
    // Edit Search
    { path: 'search-product-type', component: ProductTypeComponent, outlet: 'main-detail' },
    { path: 'search-product-category', component: ProductCategoryComponent, outlet: 'main-detail' },
    { path: 'search-product', component: ProductComponent, outlet: 'main-detail' },
    { path: 'search-uom', component: SearchUomComponent, outlet: 'main-detail' },
    { path: 'search-customer-type', component: CustomerTypeComponent, outlet: 'main-detail' },
    { path: 'search-customer', component: SearchCustomerComponent, outlet: 'main-detail' },
    { path: 'search-supplier-type', component: SupplierTypeComponent, outlet: 'main-detail' },
    { path: 'search-supplier', component: SupplierComponent, outlet: 'main-detail' },
    { path: 'search-role', component: RoleComponent, outlet: 'main-detail' },
    { path: 'search-user', component: UserComponent, outlet: 'main-detail' },
    { path: 'search-privilege', component: PrivilegeComponent, outlet: 'main-detail' },
    { path: 'search-company', component: CompanyComponent, outlet: 'main-detail'},
    // Edit Master
    { path: 'edit-product-type', component: ProductTypeComponent, outlet: 'main-detail' },
    { path: 'edit-product-category', component: ProductCategoryComponent, outlet: 'main-detail' },
    { path: 'edit-product', component: ProductComponent, outlet: 'main-detail' },
    { path: 'edit-uom', component: EditUomComponent, outlet: 'main-detail' },
    { path: 'edit-customer-type', component: CustomerTypeComponent, outlet: 'main-detail' },
    { path: 'edit-customer/:id', component: EditCustomerComponent, outlet: 'main-detail' },
    { path: 'edit-supplier-type', component: SupplierTypeComponent, outlet: 'main-detail' },
    { path: 'edit-supplier', component: SupplierComponent, outlet: 'main-detail' },
    { path: 'edit-role', component: RoleComponent, outlet: 'main-detail' },
    { path: 'edit-user', component: UserComponent, outlet: 'main-detail' },
    { path: 'edit-privilege', component: PrivilegeComponent, outlet: 'main-detail' },
    { path: 'edit-company', component: CompanyComponent, outlet: 'main-detail'}
  ]},
  {path: 'quotation', component: QuotationComponent},
  {path: 'quotation-detail', component: QuotationDetailComponent},
  {path: 'invoice', component: InvoiceComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'receive', component: ReceiveComponent},
  {path: 'posofsale', component: PosofsaleComponent},
  {path: 'posofsale-detail', component: PosofsaleDetailComponent},
  //at the end of the route definitions
  { path: '404', component: Error404Component },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
//  {path: 'a4', component: PrintA4PaperComponent},
//  {path: 'thermal', component: Print80x55mmThermalPaperComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StylizePipe,
    LoginComponent,
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
    CustomerComponent,
    CompanyComponent,
    MainDetailComponent,
    ProductComponent,
    ProductTypeComponent,
    ProductCategoryComponent,
    CustomerTypeComponent,
    UomComponent,
    SupplierComponent,
    SupplierTypeComponent,
    UserComponent,
    StaffComponent,
    PrivilegeComponent,
    RoleComponent,
    EditUomComponent,
    SearchUomComponent,
    SearchCustomerComponent,
    EditCustomerComponent,
    SignupComponent,
    ForgetPasswordComponent,
    NotFoundComponent,
    Error404Component
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
  providers: [ProductTypeService, UserService, StaffService, UtilityService,
  PosService, CustomerService, CompanyService, NavbarService,
  CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

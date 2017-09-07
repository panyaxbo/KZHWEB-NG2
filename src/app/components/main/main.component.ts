import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../../services/user/user.service';
import { CompanyService } from '../../services/company/company.service';
import { NavbarService } from '../../services/navbar/navbar.service';
import { MessageService } from '../../services/message/message.service';
import { User } from '../../classes/user';
import { Company } from '../../classes/company';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public _user: User;
  public _company: Company;
  @Output() SelectedMenu: EventEmitter<string> = new EventEmitter<string>();

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              public _userService: UserService,
              public _messageService: MessageService,
              public _companyService: CompanyService,
              public _navbarService: NavbarService
    ) {
    //  console.log('main auth ', this.afAuth.authState);
  }

  ngOnInit() {
    this._user = this._userService.GetCurrentUserData();
    console.log('Main Com user ', this._user);
    this._companyService.LoadCompanyData().subscribe(company => {
      this._company = company;
      console.log('company data prop ', this._company);
    });

    if (!this._user.photoURL) {
      this._user.photoURL = './assets/images/profile_placeholder.png'
    }
  }
  SelectGeneral() {
    this._navbarService.SetSelectedMenu('General');
    console.log(this._navbarService.GetSelectedMenu());
    this.SelectedMenu.emit('General');
    this.router.navigateByUrl('/main/(main-detail)');
  }
  SelectSale() {
    this._navbarService.SetSelectedMenu('Sale');
    this.router.navigateByUrl('/main/(main-detail:sale-menu)');
  }
  SelectPurchase() {
    this._navbarService.SetSelectedMenu('Purchase');
    this.router.navigateByUrl('/main/(main-detail:purchase-menu)');
  }
  SelectAccounting() {
    this._navbarService.SetSelectedMenu('Accounting');
  }
  SelectAP() {
    this._navbarService.SetSelectedMenu('AccountPayable');
  }
  SelectAR() {
    this._navbarService.SetSelectedMenu('AccountReceivable');
  }
  SelectStock() {
    this._navbarService.SetSelectedMenu('Stock');
  }
  SelectHumanResource() {
    this._navbarService.SetSelectedMenu('HumanResource');
    this.router.navigateByUrl('/main/(main-detail:human-resource-menu)');
  }
  SelectReport() {
    this._navbarService.SetSelectedMenu('Report');
    this.router.navigateByUrl('/main/(main-detail:report-menu)');
  }
  gotoCustomer() {
    this.router.navigateByUrl('/customer');
  }
  gotoCustomerType() {
    this.router.navigateByUrl('/customer-type');
  }
  gotoRole() {
    this.router.navigateByUrl('/role');
  }
  gotoUser() {
    this.router.navigateByUrl('/user');
  }
  gotoUom() {
    this.router.navigateByUrl('/uom');
  }
  gotoProductType() {
    this.router.navigateByUrl('/product-type');
  }
  gotoProductCategory() {
    this.router.navigateByUrl('/product-category');
  }
  gotoProduct() {
    this.router.navigateByUrl('/product');
  }
  gotoSupplier() {
    this.router.navigateByUrl('/supplier');
  }
  GotoSupplierType() {
    this.router.navigateByUrl('/supplier-type');
  }
  GotoPos() {
    this.router.navigateByUrl('/posofsale');
  }
  GotoMain() {
    this.router.navigateByUrl('/main');
  }
  Back() {
    this.router.navigateByUrl('/');
  }

}

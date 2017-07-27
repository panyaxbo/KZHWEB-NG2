import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../../services/navbar/navbar.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.css']
})
export class MainDetailComponent implements OnInit {
  IsSelectedGeneral = true;
  IsSelectedSale = false;
  IsSelectedPurchase = false;
  IsSelectedAccounting = false;
  IsSelectedStock = false;
  IsSelectedHumanResource = false;
  IsSelectedReport = false;
  IsSelectedSetting = false;

  @Input() SelectedMenu: string;
  constructor(private router: Router,
              public _navbarService: NavbarService) { }

  ngOnInit() {
  }
  GotoProductType() {
    this.router.navigateByUrl('/');
  }
  GotoProductCategory() {

  }
  GotoProduct() {

  }
  GotoUom() {

  }
  GotoCustomerType() {

  }
  GotoCustomer() {
    this.router.navigateByUrl('/main/(main-detail:search-customer)');
  }
  GotoSupplierType() {
    this.router.navigateByUrl('/main/(main-detail:search-supplier)');
  }
  GotoSupplier() {

  }
  GotoShipper() {

  }


}

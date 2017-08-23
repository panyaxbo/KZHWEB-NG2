import { SupplierService } from './../../../services/supplier/supplier.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-supplier',
  templateUrl: './search-supplier.component.html',
  styleUrls: ['./search-supplier.component.css']
})
export class SearchSupplierComponent implements OnInit {
  searchSupplier: string;
  searchSupplierList: any;
  constructor(private router: Router,
              private db: AngularFireDatabase,
              public _supplierService: SupplierService) { }

  ngOnInit() {
    this.SearchSupplier();
  }
  SearchSupplier() {
    this._supplierService.LoadSupplierData()
    .subscribe(suppliers => {
      console.log(suppliers);
      this.searchSupplierList = suppliers;
    });
  }
  NewSupplier() {
    this.router.navigateByUrl('/main/(main-detail:edit-supplier/new)');
  }
  ExitSupplier() {
    this.router.navigateByUrl('/main');
  }
}

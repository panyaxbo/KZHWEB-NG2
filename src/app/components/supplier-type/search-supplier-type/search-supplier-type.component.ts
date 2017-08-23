import { SupplierTypeService } from './../../../services/supplier-type/supplier-type.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-supplier-type',
  templateUrl: './search-supplier-type.component.html',
  styleUrls: ['./search-supplier-type.component.css']
})
export class SearchSupplierTypeComponent implements OnInit {
  searchSupplierType: string;
  searchSupplierTypeList: any;
  constructor(private router: Router,
              private db: AngularFireDatabase,
              public _supplierTypeService: SupplierTypeService) { }

  ngOnInit() {
    this.SearchSupplierType();
  }
  SearchSupplierType() {
    this._supplierTypeService.LoadSupplierTypeData()
    .subscribe(supplierTypes => {
      console.log(supplierTypes);

      this.searchSupplierTypeList = supplierTypes;
    });
  }
  NewSupplierType() {
    this.router.navigateByUrl('/main/(main-detail:edit-supplier-type/new)');
  }
  ExitSupplierType() {
    this.router.navigateByUrl('/main');
  }
}

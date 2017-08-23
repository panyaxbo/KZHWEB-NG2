import { SupplierService } from './../../../services/supplier/supplier.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Supplier } from 'app/classes/supplier';

@Component({
  selector: 'app-edit-supplier',
  templateUrl: './edit-supplier.component.html',
  styleUrls: ['./edit-supplier.component.css']
})
export class EditSupplierComponent implements OnInit {
  SupplierId: any;
  Supplier: Supplier;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _supplierService: SupplierService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.SupplierId = param.id;
      if (this.SupplierId === 'new') {
        this.NewSupplier();
      } else {
        this._supplierService.LoadSupplierByKey(this.SupplierId)
        .subscribe(supplier => {
          this.PopulatedSupplier(supplier);
        });
      }
    });
  }
  NewSupplier() {
    this.Supplier = this._supplierService.NewSupplier();
  }
  PopulatedSupplier(Supplier) {
    console.log(Supplier);
    this.Supplier = this._supplierService.PopulatedSupplier(Supplier);
    console.log(this.Supplier);
  }
  SaveSupplier() {
    if (this.Supplier.$key === '' || this.Supplier.$key === undefined) {
      this._supplierService.CreateSupplier(this.Supplier);
    } else {
      this._supplierService.UpdateSupplier(this.Supplier);
    }
  }
  BacktoSearchSupplier() {
    this.router.navigateByUrl('/main/(main-detail:search-supplier)');
  }
  ExitSupplier() {
    this.router.navigateByUrl('/main');
  }
}

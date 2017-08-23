import { SupplierTypeService } from './../../../services/supplier-type/supplier-type.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { SupplierType } from './../../../classes/supplier-type';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-supplier-type',
  templateUrl: './edit-supplier-type.component.html',
  styleUrls: ['./edit-supplier-type.component.css']
})
export class EditSupplierTypeComponent implements OnInit {
  SupplierTypeId: any;
  SupplierType: SupplierType;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _supplierTypeService: SupplierTypeService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.SupplierTypeId = param.id;
      if (this.SupplierTypeId === 'new') {
        this.NewSupplierType();
      } else {
        this._supplierTypeService.LoadSupplierTypeByKey(this.SupplierTypeId)
        .subscribe(supplierType => {
          this.PopulatedSupplierType(supplierType);
        });
      }
    });
  }
  NewSupplierType() {
    this.SupplierType = this._supplierTypeService.NewSupplierType();
  }
  PopulatedSupplierType(SupplierType) {
    this.SupplierType = this._supplierTypeService.PopulatedSupplierType(SupplierType);
  }
  SaveSupplierType() {
    if (this.SupplierType.$key === '' || this.SupplierType.$key === undefined) {
      this._supplierTypeService.CreateSupplierType(this.SupplierType);
    } else {
      this._supplierTypeService.UpdateSupplierType(this.SupplierType);
    }
  }
  BacktoSearchSupplierType() {
    this.router.navigateByUrl('/main/(main-detail:search-supplier-type)');
  }
  ExitSupplierType() {
    this.router.navigateByUrl('/main');
  }
}

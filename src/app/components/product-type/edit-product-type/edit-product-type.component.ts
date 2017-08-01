import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductType } from '../../../classes/product-type';
import { ProductTypeService } from '../../../services/product-type/product-type.service';

@Component({
  selector: 'app-edit-product-type',
  templateUrl: './edit-product-type.component.html',
  styleUrls: ['./edit-product-type.component.css']
})
export class EditProductTypeComponent implements OnInit {
  ProductTypeId: any;
  ProductType: ProductType;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _productTypeService: ProductTypeService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.ProductTypeId = param.id;
      if (this.ProductTypeId === 'new') {
        this.NewProductType();
      } else {
        this._productTypeService.LoadProductTypeByKey(this.ProductTypeId)
        .subscribe(productType => {
          this.PopulatedProductType(productType);
        });
      }
    });
  }
  NewProductType() {
    this.ProductType = this._productTypeService.NewProductType();
  }
  PopulatedProductType(ProductType) {
    console.log(ProductType);
    this.ProductType = this._productTypeService.PopulatedProductType(ProductType);
    console.log(this.ProductType);
  }
  SaveProductType() {
    if (this.ProductType.$key === '' || this.ProductType.$key === undefined) {
      this._productTypeService.CreateProductType(this.ProductType);
    } else {
      this._productTypeService.UpdateProductType(this.ProductType);
    }
  }
  BacktoSearchProductType() {
    this.router.navigateByUrl('/main/(main-detail:search-product-type)');
  }
  ExitProductType() {
    this.router.navigateByUrl('/main');
  }
}

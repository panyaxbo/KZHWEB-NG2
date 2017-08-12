import { ProductCategoryService } from './../../../services/product-category/product-category.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductCategory } from './../../../classes/product-category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product-category',
  templateUrl: './edit-product-category.component.html',
  styleUrls: ['./edit-product-category.component.css']
})
export class EditProductCategoryComponent implements OnInit {
  ProductCategoryId: any;
  ProductCategory: ProductCategory;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _productCategoryService: ProductCategoryService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.ProductCategoryId = param.id;
      if (this.ProductCategoryId === 'new') {
        this.NewProductCategory();
      } else {
        this._productCategoryService.LoadProductCategoryByKey(this.ProductCategoryId)
        .subscribe(productCategory => {
          this.PopulatedProductCategory(productCategory);
        });
      }
    });
  }
  NewProductCategory() {
    this.ProductCategory = this._productCategoryService.NewProductCategory();
  }
  PopulatedProductCategory(ProductCategory) {
    this.ProductCategory = this._productCategoryService.PopulatedProductCategory(ProductCategory);
  }
  SaveProductCategory() {
    if (this.ProductCategory.$key === '' || this.ProductCategory.$key) {
      this._productCategoryService.CreateProductCategory(this.ProductCategory);
    } else {
      this._productCategoryService.UpdateProductCategory(this.ProductCategory);
    }
  }
  BacktoSearchProductCategory() {
    this.router.navigateByUrl('/main/(main-detail:search-product-category)');
  }
  ExitProductCategory() {
    this.router.navigateByUrl('/main');
  }
}

import { ProductCategoryService } from './../../../services/product-category/product-category.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-product-category',
  templateUrl: './search-product-category.component.html',
  styleUrls: ['./search-product-category.component.css']
})
export class SearchProductCategoryComponent implements OnInit {

  searchProductCategory: string;
  searchProductCategoryList: any;

  constructor(private router: Router,
              private db: AngularFireDatabase,
              public _productCategoryService: ProductCategoryService) { }

  ngOnInit() {
    this.SearchProductCategory();
  }
  SearchProductCategory() {
    this._productCategoryService.LoadProductCategory()
    .subscribe(productCategories => {
      this.searchProductCategoryList = productCategories;
    });
  }
  NewProductCategory() {
    this.router.navigateByUrl('/main/(main-detail:edit-product-category/new)');
  }
  ExitProductCategory() {
    this.router.navigateByUrl('/main');
  }
}

import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProductTypeService } from '../../../services/product-type/product-type.service';
@Component({
  selector: 'app-search-product-type',
  templateUrl: './search-product-type.component.html',
  styleUrls: ['./search-product-type.component.css']
})
export class SearchProductTypeComponent implements OnInit {

  searchProductType: string;
  searchProductTypeList: any;

  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    public _productTypeService: ProductTypeService
  ) {}

  ngOnInit() {
    this.SearchProductType();
  }
  SearchProductType() {
    this._productTypeService.LoadProductTypeData()
    .subscribe(productTypes => {
      console.log(productTypes);

      this.searchProductTypeList = productTypes;
    //  const filterProductTypes = productTypes.filter(productType => productType.ProductTypeCode === 'PT0002');
    //  const subscribeProductTypes = filterProductTypes.map(result => {
    //     console.log(`Over 30: ${result.ProductTypeNameTh}`);
    //    });
    });
  }
  NewProductType() {
    this.router.navigateByUrl('/main/(main-detail:edit-product-type/new)');
  }
  ExitProductType() {
    this.router.navigateByUrl('/main');
  }
}

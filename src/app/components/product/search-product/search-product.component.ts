import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ProductService } from '../../../services/product/product.service';
import { KzhInputFileComponent } from '../../general/kzh-input-file/kzh-input-file.component';
@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  @ViewChild('uploadFile') kzhInputFile: KzhInputFileComponent;
  searchProductList: any;
  searchProduct: string;
  constructor(
    public _productService: ProductService,
    private db: AngularFireDatabase
  ) {}

  ngOnInit() {}
  Upload() {
    this._productService.UploadImage('./assets/images/profile_placeholder.png');
  }
  SearchProduct() {
    this._productService.LoadProductData()
    .subscribe(products => {
      console.log(products);
      this.searchProductList = products;
    });
  }
}

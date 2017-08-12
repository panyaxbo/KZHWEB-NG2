import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase} from 'angularfire2/database';
import { Product } from '../../../classes/product';
import { ProductService } from '../../../services/product/product.service';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  ProductId: any;
  Product: Product;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _productService: ProductService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.ProductId = param.id;
      if (this.ProductId === 'new') {
        this.NewProduct();
      } else {
        this._productService.LoadProductByKey(this.ProductId)
        .subscribe(product => {
          this.PopulatedProduct(product);
        });
      }
    });
  }
  NewProduct() {
    this.Product = this._productService.NewProduct();
  }
  PopulatedProduct(Product) {
    console.log(Product);
    this.Product = this._productService.PopulatedProduct(Product);
    console.log(this.Product);
  }
  SaveProduct() {
    if (this.Product.$key === '' || this.Product.$key === undefined) {
      this._productService.CreateProduct(this.Product);
    } else {
      this._productService.UpdateProduct(this.Product);
    }
  }
  BacktoSearchProduct() {
    this.router.navigateByUrl('/main/(main-detail:search-product)');
  }
  ExitProduct() {
    this.router.navigateByUrl('/main');
  }

}

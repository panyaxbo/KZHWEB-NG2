import { ProductSetService } from './../../../services/product-set/product-set.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductSet } from './../../../classes/product-set';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product-set',
  templateUrl: './edit-product-set.component.html',
  styleUrls: ['./edit-product-set.component.css']
})
export class EditProductSetComponent implements OnInit {
  ProductSetId: any;
  ProductSet: ProductSet;

  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _productSetService: ProductSetService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.ProductSetId = param.id;
      if (this.ProductSetId === 'new') {
        this.NewProductSet();
      } else {
        this._productSetService.LoadProductSetByKey(this.ProductSetId)
        .subscribe(productSet => {
          console.log(productSet);
        });
      }
    })
  }
  NewProductSet() {
    this.ProductSet = this._productSetService.NewProductSet();
  }
  PopulatedProductSet(ProductSet) {
    console.log(ProductSet);
    this.ProductSet = this._productSetService.PopulatedProductSet(ProductSet);
    console.log(this.ProductSet);
  }
  BacktoSearchProductSet() {
    this.router.navigateByUrl('/main/(main-detail:search-product-set)');
  }
  ExitProductSet() {
    this.router.navigateByUrl('main');
  }
}

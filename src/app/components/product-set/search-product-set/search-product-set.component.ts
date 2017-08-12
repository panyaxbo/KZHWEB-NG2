import { ProductSetService } from './../../../services/product-set/product-set.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-search-product-set',
  templateUrl: './search-product-set.component.html',
  styleUrls: ['./search-product-set.component.css']
})
export class SearchProductSetComponent implements OnInit {
  searchProductSet: string;
  searchProductSetList: any;

  constructor(private router: Router,
              private db: AngularFireDatabase,
              public _productSetService: ProductSetService) { }

  ngOnInit() {
    this.SearchProductSet();
  }
  SearchProductSet() {
    this._productSetService.LoadProductSetData()
    .subscribe(productSets => {
      console.log(productSets);
      this.searchProductSetList = productSets;
    })
  }
  NewProductSet() {
    this.router.navigateByUrl('/main/(main-detail:edit-product-set/new)')
  }
  ExitProductSet() {
    this.router.navigateByUrl('/main');
  }
}

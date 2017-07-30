import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UomService } from '../../../services/uom/uom.service';

@Component({
  selector: 'app-search-uom',
  templateUrl: './search-uom.component.html',
  styleUrls: ['./search-uom.component.css']
})
export class SearchUomComponent implements OnInit {
  searchUom: string;
  searchUomList: any;
  constructor(private router: Router,
              private db: AngularFireDatabase,
              private afAuth: AngularFireAuth,
              public _uomService: UomService) { }

  ngOnInit() {
    this.SearchUom();
  }
  SearchUom() {
    this._uomService.LoadUomData().subscribe(uoms => {
      console.log(uoms);
      this.searchUomList = uoms;
    });
  }
  NewUom() {
    this.router.navigateByUrl('/main/(main-detail:edit-uom/new)');
  }
  ExitUom() {
    this.router.navigateByUrl('/main');
  }
}

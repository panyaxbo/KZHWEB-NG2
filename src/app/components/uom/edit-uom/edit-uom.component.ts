import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { MdDialog } from '@angular/material';
import { Uom } from '../../../classes/uom';
import { UomService } from '../../../services/uom/uom.service';

@Component({
  selector: 'app-edit-uom',
  templateUrl: './edit-uom.component.html',
  styleUrls: ['./edit-uom.component.css']
})
export class EditUomComponent implements OnInit {
  UomId: any;
  Uom: Uom = {
    $key: '',
    Id: '',
    UomCode: '',
    UomNameTh: '',
    UomNameEn: '',
    IsContainer: false,
    CreateBy: '',
    CreateDate: '',
    UpdateBy: '',
    UpdateDate: ''
  };
  constructor(private router: Router,
              private ar: ActivatedRoute,
              private db: AngularFireDatabase,
              public _uomService: UomService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
        this.UomId = param.id;
        if (this.UomId === 'new') {
          this.NewUom();
        } else {
          // this.db.object('/uoms/' + this.UomId
          // ).subscribe(uom => {
          //   console.log(uom);
          //   this.PopulatedUom(uom);
          // });
          this._uomService.LoadUomByKey(this.UomId).subscribe(uom => {
            this.PopulatedUom(uom);
          });
        }
      });
  }
  PopulatedUom(uom) {
    this.Uom.$key = uom.$key;
    this.Uom.Id = uom.Id;
    this.Uom.UomCode = uom.UomCode;
    this.Uom.UomNameTh = uom.UomNameTh;
    this.Uom.UomNameEn = uom.UomNameEn;
    this.Uom.IsContainer = uom.IsContainer;
    this.Uom.CreateBy = uom.CreateBy === undefined ? '' : uom.CreateBy;
    this.Uom.CreateDate = uom.CreateDate === undefined ? '' : new Date().toString();
    this.Uom.UpdateBy = uom.UpdateBy === undefined ? '' : uom.UpdateBy;
    this.Uom.UpdateDate = uom.UpdateDate === undefined ? '' : new Date().toString();
  }
  NewUom() {
    this.Uom.$key = new Date().getTime().toString();
    this.Uom.Id = '';
    this.Uom.UomCode = '';
    this.Uom.UomNameTh = '';
    this.Uom.UomNameEn = '';
    this.Uom.IsContainer = false;
    this.Uom.CreateBy = '';
    this.Uom.CreateDate = new Date().toString();
    this.Uom.UpdateBy = '';
    this.Uom.UpdateDate = new Date().toString();
  }
  SaveUom() {
    if (this.Uom.$key === '' || this.Uom.$key === undefined) {
      console.log('CREATE ', this.Uom);
      this._uomService.CreateUom(this.Uom);
    } else {
      console.log('UPDATE ', this.Uom);
      this._uomService.UpdateUom(this.Uom);
    }
  }
  DeleteUom() {
    this._uomService.DeleteUom();
  }
  BacktoSearchUom() {
    this.router.navigateByUrl('/main/(main-detail:search-uom)');
  }
  ExitUom() {
    this.router.navigateByUrl('/main');
  }
}

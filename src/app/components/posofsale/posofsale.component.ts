import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PosService } from '../../services/pos/pos.service';

@Component({
  selector: 'app-posofsale',
  templateUrl: './posofsale.component.html',
  styleUrls: ['./posofsale.component.css']
})
export class PosofsaleComponent implements OnInit {

  constructor(private router: Router,
              private _posService: PosService) { }

  ngOnInit() {
    this._posService.LoadPosHeadDummyData().subscribe(data => {
      console.log(data);
    });
  }
  createPos() {
    this.router.navigateByUrl('/posofsale-detail');
  }

}

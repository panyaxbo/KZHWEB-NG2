import { RoHead } from './../../../classes/ro-head';
import { Component, OnInit, ViewChild } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {MdPaginator} from '@angular/material';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-edit-receipt',
  templateUrl: './edit-receipt.component.html',
  styleUrls: ['./edit-receipt.component.css']
})
export class EditReceiptComponent implements OnInit {
  DisplayCustomerPending = ['#', 'เลขที่', 'วันที่', 'จำนวนค้าง']
  roHead = new RoHead();
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  states: any[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  ROHeadCustomers: any[] = [
    {
      RONo: 'RO600560001',
      RODate: 3434343,
      ROTime: '23:23:434',
      PendingAmount: 6500
    },
    {
      RONo: 'RO600460024',
      RODate: 2345556,
      ROTime: '23:23:434',
      PendingAmount: 1420.25
    },
    {
      RONo: 'RO600160199',
      RODate: 2345556,
      ROTime: '23:23:434',
      PendingAmount: 3420.50
    }
  ]
  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
        .startWith(null)
        .map(state => state ? this.filterStates(state) : this.states.slice());
  }

  ngOnInit() {

  }
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}

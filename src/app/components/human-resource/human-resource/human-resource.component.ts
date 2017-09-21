
import { HumanResourceService } from './../../../services/human-resource/human-resource.service';
import { StaffService } from './../../../services/staff/staff.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';
import { HrHead } from './../../../classes/hr-head';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css']
})
export class HumanResourceComponent implements OnInit {
  SearchHrHeadList: any;
  SearchMonthYear: string;
  SearchStaffName: string;
  StaffList;
  constructor(private router: Router,
              private db: AngularFireDatabase,
              public _staffService: StaffService,
              public _humanResourceService: HumanResourceService) { }

  ngOnInit() {
    let currentMonthYear = moment(new Date()).format('MMYYYY');
    currentMonthYear = currentMonthYear.substring(0, 2) + (parseInt(currentMonthYear.substring(2), 10) + 543).toString();
    console.log(currentMonthYear);
    this.db.list('hr-heads', {
      query: {
        orderByChild: 'MonthYear',
        equalTo: currentMonthYear
      }
    }).subscribe(results => {
      console.log(results);
      this.SearchHrHeadList = results;
    });

    this._staffService.LoadStaffData().subscribe(staffs => {
      console.log(staffs);
      this.StaffList = staffs;
    });
  }

  SearchHumanResource() {

  }
  SelectedStaff($event) {
    console.log('selcted staff ', $event.element.nativeElement.innerHTML);
  }
  EditHumanResource(hrHead) {
    this.router.navigateByUrl('/human-resource-detail/' + hrHead.$key);
    this._humanResourceService.HrHead = hrHead;
  }
  NewHumanResource() {

  }
  ExitHumanResource() {
    this.router.navigateByUrl('/main/(main-detail:human-resource)');
  }
}

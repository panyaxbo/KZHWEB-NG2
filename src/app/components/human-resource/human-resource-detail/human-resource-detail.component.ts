import { StaffService } from './../../../services/staff/staff.service';
import { HrHead } from './../../../classes/hr-head';
import { HumanResourceService } from './../../../services/human-resource/human-resource.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HrLine } from './../../../classes/hr-line';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import _ from 'lodash';
@Component({
  selector: 'app-human-resource-detail',
  templateUrl: './human-resource-detail.component.html',
  styleUrls: ['./human-resource-detail.component.css']
})
export class HumanResourceDetailComponent implements OnInit {
  HRLineList: any = [];
  HRLineSelectedColor: string;
  HrHeadId: string;
  hrHead;
  staff;
  staffCode: string = '';
  numLeave: number = 0;
  numLate: number = 0;
  IsPay: boolean = false;
  Today: string = moment(new Date()).format('DD/MM/YYYY');
  showSpin: boolean = true;
  constructor(private router: Router,
              private ar: ActivatedRoute,
              public _humanResourceService: HumanResourceService,
              public _staffService: StaffService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.HrHeadId = param.id;
      if (this.HrHeadId === 'new') {
        this.NewHumanResource();
      } else {
        this._humanResourceService.LoadHumanResourceHeadByKey(this.HrHeadId)
        .subscribe(hrHead => {
          this.hrHead = hrHead;
          this.staffCode = hrHead.StaffCode;
          this.showSpin = false;
        //  console.log('this.staffCode ',this.staffCode);
          this._staffService.LoadStaffByCode(this.staffCode)
          .subscribe(staffs => {
            console.log(staffs);
            this.staff = staffs[0];
          });
        });
        this._humanResourceService.LoadHumanResourceLineByHeadKey(this.HrHeadId)
        .subscribe(hrLines => {
          this.FindToday(hrLines);
          this.showSpin = false;
        });

      }
    });
    const dates = this.GetDaysInMonth(8, 2017);
    for (let i = 0; i < dates.length; i++) {
      let current = moment(new Date()).format('DD/MM/YYYY');
      current = current.substring(0, 6) + (parseInt(current.substring(6), 10) + 543).toString();
      const hrLine = new HrLine ('', (i + 1), true, true, true, '', current, '', '', 0, '');
      if (this.Today === moment(dates[i]).format('DD/MM/YYYY')) {
        hrLine.RowStyle = {'background-color': '#93afcc'};
      } else {
      }
      this.HRLineList.push(hrLine);
    }
  }
  FindToday(hrLines) {
    let current = moment(new Date()).format('DD/MM/YYYY');
    current = current.substring(0, 6) + (parseInt(current.substring(6), 10) + 543).toString();
    for (let i = 0; i < hrLines.length; i++) {
      if (current === hrLines[i].LineDate) {
         hrLines[i].RowStyle = {'background-color': '#93afcc'};
      }
      if (!hrLines[i].IsWork) {
        this.numLeave++;
      }
      if (hrLines[i].IsLate) {
        this.numLate++;
      }
      this.HRLineList.push(hrLines[i]);
    }
  }

  GetDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
       days.push(new Date(date));
       date.setDate(date.getDate() + 1);
    }
 //   console.log(days);
    return days;
  }

  NewHumanResource() {

  }
  PopulatedHumanResource(hrHead) {

  }
  SaveHumanResource() {

  }
  PrintHumanResource() {
    this.router.navigateByUrl('/print-human-resource');
  }
  DeleteHumanRsource() {

  }
  ExitHumanResource() {

    this.router.navigateByUrl('/human-resource');
  }
  SelectedIsWork(hrLine, i) {
    console.log(hrLine, i);
    if (hrLine.IsWork) {
      this.numLeave++;
    } else {
      this.numLeave--;
    }
  }
  SelectedIsLate(hrLine, i) {
    if (hrLine.IsLate) {
      this.numLate++;
    } else {
      this.numLate--;
    }
  }
  UpdateLineAmount(hrLine, i) {
   console.log('alreaUpdateLineAmount ', hrLine);

  }
  ClickToPay() {
    this.IsPay = true;
  }
  UpdateAmountSummarize() {
    this.hrHead.NetAmount = this.hrHead.SalaryAmount + this.hrHead.BonusAmount
                          - this.hrHead.SumLoseAmount - this.hrHead.SumBorrowAmount - this.hrHead.SumProductAmount
                          - this.hrHead.PayAmount;
  }
}

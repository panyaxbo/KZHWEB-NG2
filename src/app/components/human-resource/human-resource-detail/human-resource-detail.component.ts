import { HrHead } from './../../../classes/hr-head';
import { HumanResourceService } from './../../../services/human-resource/human-resource.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HrLine } from './../../../classes/hr-line';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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

  Today: string = moment(new Date()).format('DD/MM/YYYY');
  constructor(private router: Router,
              private ar: ActivatedRoute,
              public _humanResourceService: HumanResourceService) { }

  ngOnInit() {
    this.ar.params.subscribe(param => {
      this.HrHeadId = param.id;
      if (this.HrHeadId === 'new') {
        this.NewHumanResource();
      } else {
        this._humanResourceService.LoadHumanResourceByKey(this.HrHeadId)
        .subscribe(hrHead => {
          this.PopulatedHumanResource(hrHead);
        });
      }
    });
    const dates = this.GetDaysInMonth(8, 2017);
    for (let i = 0; i < dates.length; i++) {
      const hrLine = new HrLine ('', (i + 1), true, true, true, '',
      moment(dates[i]).format('DD/MM/YYYY'), '', '', 0, '');
      if (this.Today === moment(dates[i]).format('DD/MM/YYYY')) {
        console.log(this.Today, moment(dates[i]).format('DD/MM/YYYY'));
        hrLine.RowStyle = {'background-color': '#93afcc'};
      } else {
      }
      this.HRLineList.push(hrLine);
    }
  }

  GetDaysInMonth(month, year) {
    console.log('get mon');
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
       days.push(new Date(date));
       date.setDate(date.getDate() + 1);
    }
    console.log(days);
    return days;
  }

  NewHumanResource() {

  }
  PopulatedHumanResource(hrHead) {

  }
  SaveHumanResource() {

  }
  PrintHumanResource() {

  }
  DeleteHumanRsource() {

  }
  ExitHumanResource() {
    this.router.navigateByUrl('/human-resource');
  }


}

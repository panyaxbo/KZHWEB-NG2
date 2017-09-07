import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-human-resource-menu',
  templateUrl: './human-resource-menu.component.html',
  styleUrls: ['./human-resource-menu.component.css']
})
export class HumanResourceMenuComponent implements OnInit {
  HRLineList: any;
  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.GetDaysInMonth(8, 2017);
  }

  GetDaysInMonth(month, year) {
    console.log('get mon');
    let date = new Date(year, month, 1);
    let days = [];
    while (date.getMonth() === month) {
       days.push(new Date(date));
       date.setDate(date.getDate() + 1);
    }
    console.log(days);
    return days;
  }
}

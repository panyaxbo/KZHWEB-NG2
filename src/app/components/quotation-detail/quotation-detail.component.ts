import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation-detail',
  templateUrl: './quotation-detail.component.html',
  styleUrls: ['./quotation-detail.component.css']
})
export class QuotationDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createQuotation() {

  }
}

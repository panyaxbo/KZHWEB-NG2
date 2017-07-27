import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.css']
})
export class QuotationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createQuotation() {
    this.router.navigateByUrl('/quotation-detail');
  }
}

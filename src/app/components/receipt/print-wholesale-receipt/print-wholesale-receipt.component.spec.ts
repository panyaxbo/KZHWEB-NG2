import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintWholesaleReceiptComponent } from './print-wholesale-receipt.component';

describe('PrintWholesaleReceiptComponent', () => {
  let component: PrintWholesaleReceiptComponent;
  let fixture: ComponentFixture<PrintWholesaleReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintWholesaleReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintWholesaleReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

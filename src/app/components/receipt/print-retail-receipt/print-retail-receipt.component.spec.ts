import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintRetailReceiptComponent } from './print-retail-receipt.component';

describe('PrintRetailReceiptComponent', () => {
  let component: PrintRetailReceiptComponent;
  let fixture: ComponentFixture<PrintRetailReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintRetailReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintRetailReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

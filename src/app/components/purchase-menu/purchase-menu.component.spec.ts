import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseMenuComponent } from './purchase-menu.component';

describe('PurchaseMenuComponent', () => {
  let component: PurchaseMenuComponent;
  let fixture: ComponentFixture<PurchaseMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

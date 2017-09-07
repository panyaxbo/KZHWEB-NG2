import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleMenuComponent } from './sale-menu.component';

describe('SaleMenuComponent', () => {
  let component: SaleMenuComponent;
  let fixture: ComponentFixture<SaleMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaleMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

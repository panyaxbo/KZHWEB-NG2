import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSupplierTypeComponent } from './search-supplier-type.component';

describe('SearchSupplierTypeComponent', () => {
  let component: SearchSupplierTypeComponent;
  let fixture: ComponentFixture<SearchSupplierTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSupplierTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSupplierTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

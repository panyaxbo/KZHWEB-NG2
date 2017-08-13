import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStaffComponent } from './search-staff.component';

describe('SearchStaffComponent', () => {
  let component: SearchStaffComponent;
  let fixture: ComponentFixture<SearchStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchStaffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

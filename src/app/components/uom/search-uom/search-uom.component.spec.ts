import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUomComponent } from './search-uom.component';

describe('SearchUomComponent', () => {
  let component: SearchUomComponent;
  let fixture: ComponentFixture<SearchUomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchUomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchUomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

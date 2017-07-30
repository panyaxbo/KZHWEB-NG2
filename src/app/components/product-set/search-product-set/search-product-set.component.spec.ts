import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchProductSetComponent } from './search-product-set.component';

describe('SearchProductSetComponent', () => {
  let component: SearchProductSetComponent;
  let fixture: ComponentFixture<SearchProductSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchProductSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchProductSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

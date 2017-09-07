import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceDetailComponent } from './human-resource-detail.component';

describe('HumanResourceDetailComponent', () => {
  let component: HumanResourceDetailComponent;
  let fixture: ComponentFixture<HumanResourceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

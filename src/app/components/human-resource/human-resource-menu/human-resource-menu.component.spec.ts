import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceMenuComponent } from './human-resource-menu.component';

describe('HumanResourceMenuComponent', () => {
  let component: HumanResourceMenuComponent;
  let fixture: ComponentFixture<HumanResourceMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourceMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

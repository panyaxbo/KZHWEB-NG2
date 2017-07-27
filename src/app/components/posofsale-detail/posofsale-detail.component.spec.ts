import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosofsaleDetailComponent } from './posofsale-detail.component';

describe('PosofsaleDetailComponent', () => {
  let component: PosofsaleDetailComponent;
  let fixture: ComponentFixture<PosofsaleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosofsaleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosofsaleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

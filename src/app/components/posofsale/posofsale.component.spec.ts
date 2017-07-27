import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosofsaleComponent } from './posofsale.component';

describe('PosofsaleComponent', () => {
  let component: PosofsaleComponent;
  let fixture: ComponentFixture<PosofsaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosofsaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosofsaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

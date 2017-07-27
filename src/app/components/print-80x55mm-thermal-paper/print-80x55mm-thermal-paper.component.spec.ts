import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Print80x55mmThermalPaperComponent } from './print-80x55mm-thermal-paper.component';

describe('Print80x55mmThermalPaperComponent', () => {
  let component: Print80x55mmThermalPaperComponent;
  let fixture: ComponentFixture<Print80x55mmThermalPaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Print80x55mmThermalPaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Print80x55mmThermalPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

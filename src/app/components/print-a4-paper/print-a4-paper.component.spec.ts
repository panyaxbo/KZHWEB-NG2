import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintA4PaperComponent } from './print-a4-paper.component';

describe('PrintA4PaperComponent', () => {
  let component: PrintA4PaperComponent;
  let fixture: ComponentFixture<PrintA4PaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintA4PaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintA4PaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

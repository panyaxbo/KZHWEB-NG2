import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintHumanResourceComponent } from './print-human-resource.component';

describe('PrintHumanResourceComponent', () => {
  let component: PrintHumanResourceComponent;
  let fixture: ComponentFixture<PrintHumanResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintHumanResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

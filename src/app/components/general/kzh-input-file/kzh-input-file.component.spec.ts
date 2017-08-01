import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KzhInputFileComponent } from './kzh-input-file.component';

describe('KzhInputFileComponent', () => {
  let component: KzhInputFileComponent;
  let fixture: ComponentFixture<KzhInputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KzhInputFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KzhInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReceiptComponent } from './edit-receipt.component';

describe('EditReceiptComponent', () => {
  let component: EditReceiptComponent;
  let fixture: ComponentFixture<EditReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

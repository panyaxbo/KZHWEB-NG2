import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductSetComponent } from './edit-product-set.component';

describe('EditProductSetComponent', () => {
  let component: EditProductSetComponent;
  let fixture: ComponentFixture<EditProductSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

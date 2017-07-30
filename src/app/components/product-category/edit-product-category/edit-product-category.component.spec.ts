import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductCategoryComponent } from './edit-product-category.component';

describe('EditProductCategoryComponent', () => {
  let component: EditProductCategoryComponent;
  let fixture: ComponentFixture<EditProductCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

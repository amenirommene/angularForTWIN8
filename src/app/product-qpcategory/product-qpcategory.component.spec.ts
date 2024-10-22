import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQPCategoryComponent } from './product-qpcategory.component';

describe('ProductQPCategoryComponent', () => {
  let component: ProductQPCategoryComponent;
  let fixture: ComponentFixture<ProductQPCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductQPCategoryComponent]
    });
    fixture = TestBed.createComponent(ProductQPCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsComponent } from './ds.component';

describe('DsComponent', () => {
  let component: DsComponent;
  let fixture: ComponentFixture<DsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DsComponent]
    });
    fixture = TestBed.createComponent(DsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

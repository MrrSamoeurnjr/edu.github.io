import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderrecordComponent } from './orderrecord.component';

describe('OrderrecordComponent', () => {
  let component: OrderrecordComponent;
  let fixture: ComponentFixture<OrderrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderrecordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

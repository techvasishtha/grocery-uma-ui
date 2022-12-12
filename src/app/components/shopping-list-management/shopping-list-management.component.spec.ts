import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListManagementComponent } from './shopping-list-management.component';

describe('ShoppingListManagementComponent', () => {
  let component: ShoppingListManagementComponent;
  let fixture: ComponentFixture<ShoppingListManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingListManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

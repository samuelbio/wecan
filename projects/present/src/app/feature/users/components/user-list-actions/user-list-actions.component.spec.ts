import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListActionsComponent } from './user-list-actions.component';

describe('UserListActionsComponent', () => {
  let component: UserListActionsComponent;
  let fixture: ComponentFixture<UserListActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserListActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

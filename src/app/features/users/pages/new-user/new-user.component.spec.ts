import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserPageComponent } from './new-user.component';

describe('NewUserPageComponent', () => {
  let component: NewUserPageComponent;
  let fixture: ComponentFixture<NewUserPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewUserPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewUserPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

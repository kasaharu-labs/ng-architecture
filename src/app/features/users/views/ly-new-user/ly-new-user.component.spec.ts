import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyNewUserComponent } from './ly-new-user.component';

describe('LyNewUserComponent', () => {
  let component: LyNewUserComponent;
  let fixture: ComponentFixture<LyNewUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LyNewUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

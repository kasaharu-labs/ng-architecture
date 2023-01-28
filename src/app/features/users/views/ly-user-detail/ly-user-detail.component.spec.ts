import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyUserDetailComponent } from './ly-user-detail.component';

describe('LyUserDetailComponent', () => {
  let component: LyUserDetailComponent;
  let fixture: ComponentFixture<LyUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LyUserDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LyUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

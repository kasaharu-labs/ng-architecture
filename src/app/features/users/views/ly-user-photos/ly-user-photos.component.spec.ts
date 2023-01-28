import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LyUserPhotosComponent } from './ly-user-photos.component';

describe('LyUserPhotosComponent', () => {
  let component: LyUserPhotosComponent;
  let fixture: ComponentFixture<LyUserPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyUserPhotosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LyUserPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

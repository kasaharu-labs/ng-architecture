import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailPageStore } from '../../pages/user-detail/user-detail.page-store';
import { UserPhotosComponent } from './user-photos.component';
import { UserPhotosStore } from './user-photos.store';
import { UserPhotosUsecase } from './user-photos.usecase';

jest.mock('./user-photos.usecase');

describe('UserPhotosComponent', () => {
  let component: UserPhotosComponent;
  let fixture: ComponentFixture<UserPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPhotosComponent],
      providers: [UserDetailPageStore, UserPhotosStore, UserPhotosUsecase],
    }).compileComponents();

    fixture = TestBed.createComponent(UserPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

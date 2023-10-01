import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { UserDetailUsecase } from './user-detail.usecase';

jest.mock('./user-detail.usecase');

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetailComponent],
      providers: [UserDetailUsecase],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UserDetailUsecase } from './user-detail.usecase';

jest.mock('../../../../infrastructures/api/user.api');

describe('UserDetailUsecase', () => {
  let usecase: UserDetailUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDetailUsecase, UserApi],
    });
    usecase = TestBed.inject(UserDetailUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});

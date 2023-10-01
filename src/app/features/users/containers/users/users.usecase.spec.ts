import { TestBed } from '@angular/core/testing';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UsersUsecase } from './users.usecase';

jest.mock('../../../../infrastructures/api/user.api');

describe('UsersUsecase', () => {
  let usecase: UsersUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersUsecase, UserApi],
    });
    usecase = TestBed.inject(UsersUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});

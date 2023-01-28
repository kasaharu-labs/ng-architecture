import { TestBed } from '@angular/core/testing';

import { UserDetailUsecase } from './user-detail.usecase';

describe('UserDetailUsecase', () => {
  let usecase: UserDetailUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(UserDetailUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});

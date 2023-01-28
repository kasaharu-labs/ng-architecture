import { TestBed } from '@angular/core/testing';

import { UserPhotosUsecase } from './user-photos.usecase';

describe('UserPhotosUsecase', () => {
  let usecase: UserPhotosUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usecase = TestBed.inject(UserPhotosUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { AlbumApi } from '../../../../infrastructures/api/album.api';
import { PhotoApi } from '../../../../infrastructures/api/photo.api';
import { UserPhotosUsecase } from './user-photos.usecase';

jest.mock('../../../../infrastructures/api/album.api');
jest.mock('../../../../infrastructures/api/photo.api');

describe('UserPhotosUsecase', () => {
  let usecase: UserPhotosUsecase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPhotosUsecase, AlbumApi, PhotoApi],
    });
    usecase = TestBed.inject(UserPhotosUsecase);
  });

  it('should be created', () => {
    expect(usecase).toBeTruthy();
  });
});

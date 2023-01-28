import { TestBed } from '@angular/core/testing';

import { AlbumApi } from './album.api';

describe('AlbumApi', () => {
  let api: AlbumApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    api = TestBed.inject(AlbumApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});

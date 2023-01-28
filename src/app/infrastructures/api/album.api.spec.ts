import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AlbumApi } from './album.api';

describe('AlbumApi', () => {
  let api: AlbumApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    api = TestBed.inject(AlbumApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});

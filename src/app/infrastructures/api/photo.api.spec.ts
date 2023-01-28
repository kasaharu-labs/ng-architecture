import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { PhotoApi } from './photo.api';

describe('PhotoApi', () => {
  let api: PhotoApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    api = TestBed.inject(PhotoApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});

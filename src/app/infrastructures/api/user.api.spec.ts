import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UserApi } from './user.api';

describe('UserApi', () => {
  let api: UserApi;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    api = TestBed.inject(UserApi);
  });

  it('should be created', () => {
    expect(api).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../../../../../testing/activated-route-stub';
import { AlbumApi } from '../../../../infrastructures/api/album.api';
import { PhotoApi } from '../../../../infrastructures/api/photo.api';
import { UserApi } from '../../../../infrastructures/api/user.api';
import { UserDetailComponent } from '../../containers/user-detail/user-detail.component';
import { UserPhotosComponent } from '../../containers/user-photos/user-photos.component';

import UserDetailPageComponent from './user-detail.component';

jest.mock('../../../../infrastructures/api/album.api');
jest.mock('../../../../infrastructures/api/photo.api');
jest.mock('../../../../infrastructures/api/user.api');

describe('UserDetailPageComponent', () => {
  let component: UserDetailPageComponent;
  let fixture: ComponentFixture<UserDetailPageComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async () => {
    activatedRoute = new ActivatedRouteStub({ id: 1 });

    await TestBed.configureTestingModule({
      imports: [UserDetailPageComponent, UserDetailComponent, UserPhotosComponent],
      providers: [UserApi, AlbumApi, PhotoApi, { provide: ActivatedRoute, useValue: activatedRoute }],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

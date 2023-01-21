import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { UsersComponent } from '../../containers/users/users.component';
import UsersPageComponent from './users.component';

describe('UsersComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPageComponent, PageTitleComponent, UsersComponent],
      // TODO: このコンポーネントで ActivatedRoute が必要になる原因が不明
      //       必要に応じて調査し、providers に登録しなくてもいいように修正が必要
      providers: [provideHttpClient(), { provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

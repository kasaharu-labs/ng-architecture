import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersStore } from './users.store';
import { UsersUsecase } from './users.usecase';

jest.mock('./users.usecase');

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      // TODO: このコンポーネントで ActivatedRoute が必要になる原因が不明
      //       必要に応じて調査し、providers に登録しなくてもいいように修正が必要
      providers: [UsersStore, UsersUsecase, { provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

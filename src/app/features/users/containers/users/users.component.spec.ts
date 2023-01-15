import { ComponentFixture, TestBed } from '@angular/core/testing';
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
      providers: [UsersStore, UsersUsecase],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

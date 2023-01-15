import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { UsersComponent } from '../../containers/users/users.component';
import UsersPageComponent from './users.component';

describe('UsersComponent', () => {
  let component: UsersPageComponent;
  let fixture: ComponentFixture<UsersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPageComponent, PageTitleComponent, UsersComponent],
      providers: [provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from '../../../../routes';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { UsersComponent } from '../../containers/users/users.component';
import UsersPageComponent from './users.component';

@Component({ selector: 'app-users', standalone: true, template: '' })
class MockUsersComponent {}

describe('UsersComponent', () => {
  let harness: RouterTestingHarness;
  let component: UsersPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersPageComponent, PageTitleComponent],
      providers: [provideRouter(routes)],
    })
      .overrideComponent(UsersPageComponent, { remove: { imports: [UsersComponent] }, add: { imports: [MockUsersComponent] } })
      .compileComponents();

    harness = await RouterTestingHarness.create();
    component = await harness.navigateByUrl('', UsersPageComponent);
    harness.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('page-title に "ユーザー一覧" と表示されること', () => {
    const pageTitleElem = harness.routeNativeElement?.querySelector('app-page-title');
    expect(pageTitleElem?.textContent).toBe('ユーザー一覧');
  });
});

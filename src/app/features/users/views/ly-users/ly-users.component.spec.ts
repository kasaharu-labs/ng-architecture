import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { LyUsersComponent } from './ly-users.component';

describe('LyUsersComponent', () => {
  let component: LyUsersComponent;
  let fixture: ComponentFixture<LyUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LyUsersComponent],
      // TODO: このコンポーネントで ActivatedRoute が必要になる原因が不明
      //       必要に応じて調査し、providers に登録しなくてもいいように修正が必要
      providers: [{ provide: ActivatedRoute, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(LyUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersUsecase } from './users.usecase';
import { UsersStore } from './users.store';
import { LyUsersComponent } from '../../views/ly-users/ly-users.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, LyUsersComponent],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersStore, UsersUsecase],
})
export class UsersComponent implements OnInit {
  private readonly store = inject(UsersStore);
  private readonly usecase = inject(UsersUsecase);

  readonly users$ = this.store.users$;

  ngOnInit(): void {
    this.usecase.init();
  }
}

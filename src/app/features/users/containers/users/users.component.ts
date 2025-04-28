import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LyUsersComponent } from '../../views/ly-users/ly-users.component';
import { UsersUsecase } from './users.usecase';

@Component({
    selector: 'app-users',
    imports: [CommonModule, MatProgressSpinnerModule, LyUsersComponent],
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    providers: [UsersUsecase]
})
export class UsersComponent implements OnInit {
  private readonly usecase = inject(UsersUsecase);

  readonly $users = computed(() => this.usecase.$state().users);
  readonly $isLoading = computed(() => this.usecase.$state().isLoading);

  async ngOnInit(): Promise<void> {
    this.usecase.init();
  }
}

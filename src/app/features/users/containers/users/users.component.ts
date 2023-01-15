import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersUsecase } from './users.usecase';
import { UsersStore } from './users.store';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [UsersStore, UsersUsecase],
})
export class UsersComponent implements OnInit {
  private readonly usecase = inject(UsersUsecase);

  ngOnInit(): void {
    this.usecase.init();
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { LyUserDetailComponent } from '../../views/ly-user-detail/ly-user-detail.component';
import { UserDetailStore } from './user-detail.store';
import { UserDetailUsecase } from './user-detail.usecase';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, LyUserDetailComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  providers: [UserDetailStore, UserDetailUsecase],
})
export class UserDetailComponent implements OnInit {
  private readonly store = inject(UserDetailStore);
  private readonly usecase = inject(UserDetailUsecase);

  @Input({ required: true }) userId!: number | null;

  readonly user$ = this.store.user$;

  ngOnInit(): void {
    if (this.userId === null) {
      return;
    }

    this.usecase.init(this.userId);
  }
}

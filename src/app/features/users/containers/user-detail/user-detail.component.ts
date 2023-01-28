import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyUserDetailComponent } from '../../views/ly-user-detail/ly-user-detail.component';
import { UserDetailPageStore } from '../../pages/user-detail/user-detail.page-store';
import { takeUntil } from 'rxjs';
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
  private readonly pageStore = inject(UserDetailPageStore);
  private readonly store = inject(UserDetailStore);
  private readonly usecase = inject(UserDetailUsecase);

  private readonly userId$ = this.pageStore.userId$;
  readonly user$ = this.store.user$;

  ngOnInit(): void {
    this.userId$.pipe(takeUntil(this.pageStore.destroy$)).subscribe((userId) => {
      if (userId === null) {
        return;
      }

      this.usecase.init(userId);
    });
  }
}

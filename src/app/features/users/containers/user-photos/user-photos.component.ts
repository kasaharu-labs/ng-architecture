import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailPageStore } from '../../pages/user-detail/user-detail.page-store';
import { takeUntil } from 'rxjs';
import { UserPhotosStore } from './user-photos.store';
import { UserPhotosUsecase } from './user-photos.usecase';

@Component({
  selector: 'app-user-photos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.scss'],
  providers: [UserPhotosStore, UserPhotosUsecase],
})
export class UserPhotosComponent implements OnInit {
  private readonly pageStore = inject(UserDetailPageStore);
  private readonly usecase = inject(UserPhotosUsecase);

  private readonly userId$ = this.pageStore.userId$;

  ngOnInit(): void {
    this.userId$.pipe(takeUntil(this.pageStore.destroy$)).subscribe((userId) => {
      console.log(userId);
      if (userId === null) {
        return;
      }

      this.usecase.init(userId);
    });
  }
}

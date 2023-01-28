import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyUserDetailComponent } from '../../views/ly-user-detail/ly-user-detail.component';
import { UserDetailPageStore } from '../../pages/user-detail/user-detail.page-store';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, LyUserDetailComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  private readonly pageStore = inject(UserDetailPageStore);
  private readonly userId$ = this.pageStore.userId$;

  ngOnInit(): void {
    this.userId$.pipe(takeUntil(this.pageStore.destroy$)).subscribe((userId) => {
      console.log(userId);
    });
  }
}

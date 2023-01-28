import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { UserDetailComponent } from '../../containers/user-detail/user-detail.component';
import { UserPhotosComponent } from '../../containers/user-photos/user-photos.component';
import { UserDetailPageStore } from './user-detail.page-store';

@Component({
  standalone: true,
  imports: [CommonModule, UserDetailComponent, UserPhotosComponent, PageTitleComponent],
  templateUrl: './user-detail.component.html',
  providers: [UserDetailPageStore],
})
export default class UserDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly store = inject(UserDetailPageStore);

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId === null) {
      alert('ユーザーの ID が不正です');
      return;
    }
    this.store.setUserId(Number(userId));
  }
}

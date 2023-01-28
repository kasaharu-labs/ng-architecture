import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../../containers/user-detail/user-detail.component';
import { UserDetailPageStore } from './user-detail.page-store';
import { ActivatedRoute } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, UserDetailComponent],
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

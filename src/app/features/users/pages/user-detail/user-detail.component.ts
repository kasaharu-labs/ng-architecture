import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageTitleComponent } from '../../../../shared/page-title/page-title.component';
import { UserDetailComponent } from '../../containers/user-detail/user-detail.component';
import { UserPhotosComponent } from '../../containers/user-photos/user-photos.component';

@Component({
    imports: [CommonModule, UserDetailComponent, UserPhotosComponent, PageTitleComponent],
    templateUrl: './user-detail.component.html'
})
export default class UserDetailPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  userId: number | null = null;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userId = id === null ? null : Number(id);

    if (this.userId === null) {
      alert('ユーザーの ID が不正です');
      return;
    }
  }
}

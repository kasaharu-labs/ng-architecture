import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { LyUserDetailComponent } from '../../views/ly-user-detail/ly-user-detail.component';
import { UserDetailUsecase } from './user-detail.usecase';

@Component({
    selector: 'app-user-detail',
    imports: [CommonModule, LyUserDetailComponent],
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss'],
    providers: [UserDetailUsecase]
})
export class UserDetailComponent implements OnInit {
  private readonly usecase = inject(UserDetailUsecase);

  @Input({ required: true }) userId!: number | null;

  readonly $user = computed(() => this.usecase.$state().user);

  ngOnInit(): void {
    if (this.userId === null) {
      return;
    }

    this.usecase.init(this.userId);
  }
}

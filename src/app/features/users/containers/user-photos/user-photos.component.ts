import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { LyUserPhotosComponent } from '../../views/ly-user-photos/ly-user-photos.component';
import { UserPhotosStore } from './user-photos.store';
import { UserPhotosUsecase } from './user-photos.usecase';

@Component({
  selector: 'app-user-photos',
  standalone: true,
  imports: [CommonModule, LyUserPhotosComponent],
  templateUrl: './user-photos.component.html',
  styleUrls: ['./user-photos.component.scss'],
  providers: [UserPhotosStore, UserPhotosUsecase],
})
export class UserPhotosComponent implements OnInit {
  private readonly store = inject(UserPhotosStore);
  private readonly usecase = inject(UserPhotosUsecase);

  @Input({ required: true }) userId!: number | null;

  readonly photos$ = this.store.photos$;

  ngOnInit(): void {
    if (this.userId === null) {
      return;
    }

    this.usecase.init(this.userId);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LyUserDetailComponent } from '../../views/ly-user-detail/ly-user-detail.component';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule, LyUserDetailComponent],
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent {}

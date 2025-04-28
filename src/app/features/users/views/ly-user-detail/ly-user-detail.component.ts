import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../../../../domain/user';

@Component({
    selector: 'app-ly-user-detail',
    imports: [CommonModule],
    templateUrl: './ly-user-detail.component.html',
    styleUrls: ['./ly-user-detail.component.scss']
})
export class LyUserDetailComponent {
  @Input() user: User | null = null;
}

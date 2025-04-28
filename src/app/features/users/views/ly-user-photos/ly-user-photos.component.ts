import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Photo } from '../../../../domain/photo';

@Component({
    selector: 'app-ly-user-photos',
    imports: [CommonModule],
    templateUrl: './ly-user-photos.component.html',
    styleUrls: ['./ly-user-photos.component.scss']
})
export class LyUserPhotosComponent {
  @Input() photos: Photo[] | null = null;
}

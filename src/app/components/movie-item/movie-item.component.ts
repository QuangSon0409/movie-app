import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/model/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent {
  @Input() ItemData: IMovie | null = null;
}

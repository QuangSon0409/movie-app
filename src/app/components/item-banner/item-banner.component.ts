import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/model/movie';

@Component({
  selector: 'app-item-banner',
  templateUrl: './item-banner.component.html',
  styleUrls: ['./item-banner.component.scss'],
})
export class ItemBannerComponent {
  @Input() items: Array<IMovie> = [];
  @Input() title: string = '';
}

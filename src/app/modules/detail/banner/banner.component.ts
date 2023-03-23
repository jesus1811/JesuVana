import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/model/Movie.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() movie!: Movie;

  ngOnInit() {}
}

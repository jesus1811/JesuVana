import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  constructor(private router: Router) {}
  @Input() movie!: Movie;
  redirectDetail() {
    this.router.navigate([`/serie`, this.movie.title]);
  }
}

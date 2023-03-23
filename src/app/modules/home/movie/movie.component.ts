import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/model/Movie.model';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie!: Movie;
  constructor(private router: Router) {}

  redirectDetail() {
    this.router.navigate([`/`, this.movie.title]);
  }
}

import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/model/AppState.model';
import { Movie } from 'src/app/model/Movie.model';
import { favoritesAdd } from 'src/app/store/favorites/favorites.actions';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  @Input() movie!: Movie;
  constructor(private router: Router, private store: Store<AppState>) {}

  redirectDetail() {
    this.router.navigate([`/serie`, this.movie.title]);
  }
  addFavorite() {
    this.store.dispatch(favoritesAdd({ payload: this.movie }));
  }
}

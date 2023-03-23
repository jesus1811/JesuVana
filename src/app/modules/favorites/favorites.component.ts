import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/model/AppState.model';
import { Movie } from 'src/app/model/Movie.model';
import { favoritesSelector } from 'src/app/store/favorites/favorites.selector';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent {
  // movies!: Observable<Movie[]>;
  favorites!: Observable<Movie[]>;
  constructor(private store: Store<AppState>) {
    this.favorites = this.store.select(favoritesSelector);
  }
}

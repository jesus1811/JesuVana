import { createReducer, on } from '@ngrx/store';
import { Movie } from 'src/app/model/Movie.model';
import { favoritesAdd } from './favorites.actions';

const favorites = localStorage.getItem('favorites');

const initialState: Movie[] = (favorites && JSON.parse(favorites)) || [];

export const favoritesReducer = createReducer(
  initialState,
  on(favoritesAdd, (state, { payload }) => {
    const isMovie = state.some((movie) => movie.id === payload.id);
    if (!isMovie) {
      localStorage.setItem('favorites', JSON.stringify([...state, payload]));
      return [...state, payload];
    }
    return state;
  })
);

import { createAction, props } from '@ngrx/store';
import {Movie } from 'src/app/model/Movie.model';

export const favoritesAdd = createAction(
  '[favorites] Add ',
  props<{ payload: Movie }>()
);

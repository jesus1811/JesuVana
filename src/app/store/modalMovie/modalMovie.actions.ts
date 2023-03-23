import { createAction, props } from '@ngrx/store';
import { ModalMovie } from 'src/app/model/ModalMovie.model';

export const modalMovieChange = createAction(
  '[modalMovie] change',
  props<{ payload: ModalMovie }>()
);

export const modalMovieClose = createAction('[modalMovie] close');

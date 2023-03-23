import { createAction, props } from '@ngrx/store';
import { ModalMovie } from './modal.model';

export const modalMovieChange = createAction(
  '[modalMovie] change',
  props<{ payload: ModalMovie }>()
);

export const modalMovieClose = createAction('[modalMovie] close');

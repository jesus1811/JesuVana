import { createReducer, on } from '@ngrx/store';
import { modalMovieChange, modalMovieClose } from './modalMovie.actions';
import { ModalMovie } from './modal.model';
import { Episode } from 'src/app/model/Movie.model';

const initialState: ModalMovie = {
  isModal: false,
  episode: {} as Episode,
};

export const modalMovieReducer = createReducer(
  initialState,
  on(modalMovieChange, (state, { payload }) => payload),
  on(modalMovieClose, (state) => ({ ...initialState, isModal: false }))
);

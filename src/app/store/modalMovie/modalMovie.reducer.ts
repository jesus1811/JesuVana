import { createReducer, on } from '@ngrx/store';
import { modalMovieChange, modalMovieClose } from './modalMovie.actions';
import { Episode } from 'src/app/model/Movie.model';
import { ModalMovie } from 'src/app/model/ModalMovie.model';

const initialState: ModalMovie = {
  isModal: false,
  episode: {} as Episode,
};

export const modalMovieReducer = createReducer(
  initialState,
  on(modalMovieChange, (state, { payload }) => payload),
  on(modalMovieClose, (state) => ({ ...initialState, isModal: false }))
);

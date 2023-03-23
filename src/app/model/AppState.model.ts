import { ModalMovie } from './ModalMovie.model';
import { Movie } from './Movie.model';

export interface AppState {
  modalMovie: ModalMovie;
  favorites: Movie[];
}

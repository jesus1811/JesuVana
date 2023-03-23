import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Episode, Movie } from 'src/app/model/Movie.model';
import { modalMovieChange } from 'src/app/store/modalMovie/modalMovie.actions';
// import { isModalMovieChange } from 'src/app/store/modalMovie/modalMovie.actions';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
})
export class EpisodeComponent {
  constructor(private store: Store) {}
  @Input() episode!: Episode;

  handleChangeModalMovie() {
    this.store.dispatch(
      modalMovieChange({ payload: { isModal: true, episode: this.episode } })
    );
  }
}

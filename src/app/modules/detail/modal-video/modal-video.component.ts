import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/model/AppState.model';
import { ModalMovie } from 'src/app/store/modalMovie/modal.model';
import { modalMovieClose } from 'src/app/store/modalMovie/modalMovie.actions';
import { modalMovieSelector } from 'src/app/store/modalMovie/modalMovie.selector';
interface EpisodeObs {
  number: Observable<number>;
  season: Observable<number>;
  title: Observable<string>;
  description: Observable<string>;
  image: Observable<string>;
  movie: Observable<string>;
}

@Component({
  selector: 'app-modal-video',
  templateUrl: './modal-video.component.html',
  styleUrls: ['./modal-video.component.scss'],
})
export class ModalVideoComponent {
  modalMovie!: Observable<ModalMovie>;
  constructor(private store: Store<AppState>) {
    this.modalMovie = this.store.select(modalMovieSelector);
  }
  handleModalVideoClose() {
    this.store.dispatch(modalMovieClose());
    console.log('cerrando-modal');
  }
}

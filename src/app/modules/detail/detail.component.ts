import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/model/AppState.model';
import { Episode, Movie } from 'src/app/model/Movie.model';
import { ModalMovie } from 'src/app/store/modalMovie/modal.model';
import { modalMovieChange } from 'src/app/store/modalMovie/modalMovie.actions';
import { modalMovieSelector } from 'src/app/store/modalMovie/modalMovie.selector';
import { movies } from 'src/app/_mock';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  movie!: Movie;
  param: string | null = this.route.snapshot.paramMap.get('nameVideo');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.filterMovie();
  }

  filterMovie() {
    const movie = movies.find((movie) => movie.title === this.param);
    if (movie) this.movie = movie;
  }
}

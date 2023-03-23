import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  Movie } from 'src/app/model/Movie.model';
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

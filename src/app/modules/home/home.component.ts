import { Component } from '@angular/core';
import { Movie } from 'src/app/model/Movie.model';
import { movies } from 'src/app/_mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  movies: Movie[] = movies;
}

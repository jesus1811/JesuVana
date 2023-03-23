import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieComponent } from './movie/movie.component';



@NgModule({
  declarations: [
    FavoritesComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class FavoritesModule { }

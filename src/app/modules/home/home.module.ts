import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MovieComponent } from './movie/movie.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, MovieComponent],
  imports: [CommonModule, SharedModule],
})
export class HomeModule {}

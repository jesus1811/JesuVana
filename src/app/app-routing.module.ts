import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './modules/detail/detail.component';
import { FavoritesComponent } from './modules/favorites/favorites.component';
import { HomeComponent } from './modules/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'serie/:nameVideo',
    component: DetailComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

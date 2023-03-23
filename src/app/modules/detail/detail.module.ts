import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
// import { EpisodeComponent } from './episode/episode.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';
import { EpisodeComponent } from './episode/episode.component';

@NgModule({
  declarations: [DetailComponent, BannerComponent, ModalVideoComponent, EpisodeComponent],
  imports: [CommonModule,SharedModule],
})
export class DetailModule {}

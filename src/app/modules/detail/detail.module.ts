import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EpisodeComponent } from './episode/episode.component';
import { ModalVideoComponent } from './modal-video/modal-video.component';

@NgModule({
  declarations: [DetailComponent, BannerComponent, EpisodeComponent, ModalVideoComponent],
  imports: [CommonModule,SharedModule],
})
export class DetailModule {}

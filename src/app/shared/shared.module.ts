import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PlayComponent } from './play/play.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [NavBarComponent, PlayComponent, AddComponent],
  imports: [CommonModule],
  exports: [NavBarComponent, PlayComponent, AddComponent],
})
export class SharedModule {}

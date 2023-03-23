import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './model/AppState.model';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeModule } from './modules/home/home.module';
import { DetailModule } from './modules/detail/detail.module';
import {  modalMovieReducer } from './store/modalMovie/modalMovie.reducer';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule,
    DetailModule,
    StoreModule.forRoot<AppState>({
      modalMovie: modalMovieReducer,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

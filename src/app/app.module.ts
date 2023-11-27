import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RooterComponent } from './rooter/rooter.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { GameProjectsComponent } from './game-projects/game-projects.component';
import { UIProjectsComponent } from './uiprojects/uiprojects.component';
import { ArtworksComponent } from './artworks/artworks.component';

@NgModule({
  declarations: [
    AppComponent,
    RooterComponent,
    HeaderComponent,
    HomeComponent,
    WebProjectsComponent,
    GameProjectsComponent,
    UIProjectsComponent,
    ArtworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

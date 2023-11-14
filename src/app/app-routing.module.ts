import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebProjectsComponent } from './web-projects/web-projects.component';
import { GameProjectsComponent } from './game-projects/game-projects.component';
import { ArtworksComponent } from './artworks/artworks.component';
import { UIProjectsComponent } from './uiprojects/uiprojects.component';
import { RooterComponent } from './rooter/rooter.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'web-projects', component: WebProjectsComponent},
  {path: 'game-projects', component: GameProjectsComponent},
  {path: 'ui-projects', component: UIProjectsComponent},
  {path: 'artworks', component: ArtworksComponent},
  {path: 'rooter', component: RooterComponent},
  {path: '**', component: HomeComponent, pathMatch: 'full'}  // If anyone type a random URL, such as "http://localhost:4200/afdffsdfasf", this will keep them on the home page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

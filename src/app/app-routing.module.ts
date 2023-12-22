import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DettaglioMoviesComponent } from './dettaglio-movies/dettaglio-movies.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import {ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'home/', component:HomeComponent},
  {path:'dettaglio', component:DettaglioMoviesComponent},
  {path:'dettaglio/:movie_id', component:DettaglioMoviesComponent},
  {path:'ricerca', component:RicercaComponent},
  {path:'contatti', component:ContattiComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

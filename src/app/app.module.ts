import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DettaglioMoviesComponent } from './dettaglio-movies/dettaglio-movies.component';
import { RicercaComponent } from './ricerca/ricerca.component';
import { ContattiComponent } from './contatti/contatti.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    DettaglioMoviesComponent,
    RicercaComponent,
    ContattiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

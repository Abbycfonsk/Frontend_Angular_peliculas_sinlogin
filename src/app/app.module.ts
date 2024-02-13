import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InicioComponent } from './components/peliculas/inicio/inicio.component';
import { ConsultaPeliculasComponent } from './components/peliculas/consulta-peliculas/consulta-peliculas.component';
import { AltaPeliculaComponent } from './components/peliculas/alta-pelicula/alta-pelicula.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { MtoPeliculaComponent } from './components/peliculas/mto-pelicula/mto-pelicula.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ConsultaPeliculasComponent,
    AltaPeliculaComponent,
    DetallePeliculaComponent,
    MtoPeliculaComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

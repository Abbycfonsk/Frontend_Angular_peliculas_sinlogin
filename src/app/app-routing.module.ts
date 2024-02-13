import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaPeliculasComponent } from './components/peliculas/consulta-peliculas/consulta-peliculas.component';
import { InicioComponent } from './components/peliculas/inicio/inicio.component';
import { DetallePeliculaComponent } from './components/peliculas/detalle-pelicula/detalle-pelicula.component';
import { AltaPeliculaComponent } from './components/peliculas/alta-pelicula/alta-pelicula.component';
import { MtoPeliculaComponent } from './components/peliculas/mto-pelicula/mto-pelicula.component';
import { CategoriasComponent } from './components/categorias/categorias/categorias.component';

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'peliculas',component:ConsultaPeliculasComponent},
  {path:'peliculas/:id',component:DetallePeliculaComponent},
  {path:'alta',component:AltaPeliculaComponent},
  {path:'mantenimiento/:id',component:MtoPeliculaComponent},
  {path:'categorias',component:CategoriasComponent},
  {path:'**',pathMatch:'full',redirectTo:'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Routes } from '@angular/router';
import { ElementosComponent } from './componentes/elementos/elementos.component';
import { AppComponent } from './app.component';
import { PersonajeComponent } from './componentes/personaje/personaje.component';
import { DetallesPersonajeComponent } from './componentes/detalles-personaje/detalles-personaje.component';
import { DetallesSagaComponent } from './componentes/detalles-saga/detalles-saga.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListadoPersonajesComponent } from './pages/listado-personajes/listado-personajes.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoSagaComponent } from './componentes/listado-saga/listado-saga.component';

export const routes: Routes = [
    /*{path: '', redirectTo: 'index',pathMatch:'full'},
    {path: 'index', component: AppComponent},*/
    {path: '', redirectTo: 'home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'elementos', component: ElementosComponent},
    {path: 'sagas', component: ListadoSagaComponent},
    {path: 'sagas/:id', component: DetallesSagaComponent},
    {path: 'personajes', component: ListadoPersonajesComponent},
    {path: 'personajes/:id', component: DetallesPersonajeComponent},
    {path: 'not_found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not_found',pathMatch:'full'},
];


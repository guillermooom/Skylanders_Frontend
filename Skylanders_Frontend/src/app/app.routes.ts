import { Routes } from '@angular/router';
import { ElementosComponent } from './componentes/elementos/elementos.component';
import { DetallesPersonajeComponent } from './componentes/detalles-personaje/detalles-personaje.component';
import { DetallesSagaComponent } from './componentes/detalles-saga/detalles-saga.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ListadoPersonajesComponent } from './pages/listado-personajes/listado-personajes.component';
import { HomeComponent } from './pages/home/home.component';
import { SagaComponent } from './pages/saga/saga.component';

export const routes: Routes = [
    /*{path: '', redirectTo: 'index',pathMatch:'full'},
    {path: 'index', component: AppComponent},*/
    {path: '', redirectTo: 'home',pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path: 'elementos', component: ElementosComponent},
    {path: 'sagas', component: SagaComponent},
    {path: 'sagas/:id', component: DetallesSagaComponent},
    {path: 'personajes', component: ListadoPersonajesComponent},
    {path: 'personajes/:id', component: DetallesPersonajeComponent},
    {path: 'not_found', component: NotFoundComponent},
    {path: '**', redirectTo: 'not_found',pathMatch:'full'},
];


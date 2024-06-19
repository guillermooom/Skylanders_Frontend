import { Routes } from '@angular/router';
import { ElementosComponent } from './componentes/elementos/elementos.component';
import { AppComponent } from './app.component';
import { SagaComponent } from './componentes/saga/saga.component';
import { PersonajeComponent } from './componentes/personaje/personaje.component';

export const routes: Routes = [
    /*{path: '', redirectTo: 'index',pathMatch:'full'},
    {path: 'index', component: AppComponent},*/
    {path: 'elementos', component: ElementosComponent},
    {path: 'sagas', component: SagaComponent},
    {path: 'personajes', component: PersonajeComponent},
];


import { Routes } from '@angular/router';
import { ElementosComponent } from './componentes/elementos/elementos.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    /*{path: '', redirectTo: 'index',pathMatch:'full'},
    {path: 'index', component: AppComponent},*/
    {path: 'elementos', component: ElementosComponent},
];


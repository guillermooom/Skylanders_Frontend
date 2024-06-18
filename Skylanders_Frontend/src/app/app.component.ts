import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { ElementosComponent } from './componentes/elementos/elementos.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ElementosComponent,RouterLink]
})
export class AppComponent {
  title = 'Skylanders Frontend';
}

import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ElementosComponent } from './componentes/elementos/elementos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,ElementosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Skylanders Frontend';
}

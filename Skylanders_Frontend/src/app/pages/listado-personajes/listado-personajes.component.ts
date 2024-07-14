import { Component } from '@angular/core';
import { PersonajeComponent } from "../../componentes/personaje/personaje.component";

@Component({
  selector: 'app-listado-personajes',
  standalone: true,
  imports: [PersonajeComponent],
  templateUrl: './listado-personajes.component.html',
  styleUrl: './listado-personajes.component.css'
})
export class ListadoPersonajesComponent {

}

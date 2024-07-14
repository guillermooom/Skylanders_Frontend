import { Component } from '@angular/core';
import { PersonajeComponent } from "../../componentes/personaje/personaje.component";
import { HeaderComponent } from "../../componentes/header/header.component";

@Component({
  selector: 'app-listado-personajes',
  standalone: true,
  imports: [PersonajeComponent, HeaderComponent],
  templateUrl: './listado-personajes.component.html',
  styleUrl: './listado-personajes.component.css'
})
export class ListadoPersonajesComponent {

}

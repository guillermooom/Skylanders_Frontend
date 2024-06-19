import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../Entidades/Personajes';
import { PersonajeService } from '../../Services/personaje.service';
import { Elementos } from '../../Entidades/Elementos';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit{

  personajes:Personajes[];
  personajes_clear:Personajes[];

  constructor(private personajeService:PersonajeService){}

  ngOnInit(): void {
    this.obtenerElementos();
  }

  private obtenerElementos(){
    this.personajeService.obtenerPersonajes().subscribe(dato =>{
      this.personajes = dato;
      this.personajes_clear = dato.slice();
    });
  }

  ordernarElemento() {
    this.personajes.sort((a, b) => a.elemento.nombre.localeCompare(b.elemento.nombre));
  }

  ordernarNombre(){
    this.personajes.sort((a, b) => a.nombre.localeCompare(b.nombre));
  }

  limpiarFiltros(){
    this.personajes = this.personajes_clear.slice();
  }

  elementoAire(){
    this.personajes = this.personajes.filter(personaje => personaje.elemento.id === 2);
   }
  
}

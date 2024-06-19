import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../Entidades/Personajes';
import { PersonajeService } from '../../Services/personaje.service';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit{

  personajes:Personajes[];

  constructor(private personajeService:PersonajeService){}

  ngOnInit(): void {
    this.obtenerElementos();
  }

  private obtenerElementos(){
    this.personajeService.obtenerPersonajes().subscribe(dato =>{
      this.personajes = dato;
    });
  }
}

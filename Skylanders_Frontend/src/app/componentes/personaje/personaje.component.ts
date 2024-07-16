import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../Entidades/Personajes';
import { PersonajeService } from '../../Services/personaje.service';
import { Elementos } from '../../Entidades/Elementos';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent implements OnInit{

  imageError(event: any) {
    event.target.src = 'assets/personajes/skylanders_error.png'
    
  }

  personajes:Personajes[];
  personajes_clear:Personajes[];
  elementos:Elementos[];

  elementoId:number=1;

  constructor(private personajeService:PersonajeService, private router:Router){}

  ngOnInit(): void {
    this.obtenerPersonajes();
    this.obtenerElementos();
  }

  private obtenerPersonajes(){
    this.personajeService.obtenerPersonajes().subscribe(dato =>{
      this.personajes = dato;
      this.personajes_clear = dato.slice();
    });
  }

  private obtenerElementos(){
    this.personajeService.obtenerElementos().subscribe(dato =>{
      this.elementos = dato;
      });
  }

  verDetalles(id:string){
    this.router.navigate(['personajes',id]);
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

  filtrarElemento(){
    this.personajes = this.personajes_clear.slice();
    this.personajes = this.personajes.filter(personaje => personaje.elemento.id == this.elementoId);
  }
  
}

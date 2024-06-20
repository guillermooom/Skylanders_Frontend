import { Component, OnInit } from '@angular/core';
import { Personajes } from '../../Entidades/Personajes';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PersonajeService } from '../../Services/personaje.service';

@Component({
  selector: 'app-detalles-personaje',
  standalone: true,
  imports: [],
  templateUrl: './detalles-personaje.component.html',
  styleUrl: './detalles-personaje.component.css'
})
export class DetallesPersonajeComponent implements OnInit{

  id:string;
  personaje:Personajes;

  constructor(private route:ActivatedRoute, private personaje_service:PersonajeService, private router:Router){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaje = new Personajes();
    this.personaje_service.obtenerPersonajesId(this.id).subscribe(dato =>{
      this.personaje = dato;
    });
  }

  volverListado(){
    this.router.navigate(['personajes']);
  }

}

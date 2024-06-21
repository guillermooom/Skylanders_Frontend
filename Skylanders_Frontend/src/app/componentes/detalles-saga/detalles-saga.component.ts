import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Saga } from '../../Entidades/Saga';
import { SagaService } from '../../Services/saga.service';
import { PersonajeService } from '../../Services/personaje.service';
import { Personajes } from '../../Entidades/Personajes';

@Component({
  selector: 'app-detalles-saga',
  standalone: true,
  imports: [],
  templateUrl: './detalles-saga.component.html',
  styleUrl: './detalles-saga.component.css'
})
export class DetallesSagaComponent implements OnInit{
  
  constructor(private route:ActivatedRoute, private router:Router, private saga_service:SagaService){}
  
  id:number;
  saga:Saga;
  personajes:Personajes[];

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.saga = new Saga();
    this.saga_service.obtenerSagasId(this.id).subscribe(dato =>{
      this.saga = dato;
    });

    this.obtenerPersonajes();
  }

  volverSagas(){
    this.router.navigate(['sagas']);
  }

  private obtenerPersonajes(){
    this.saga_service.obtenerPersonajes().subscribe(dato =>{
      this.personajes = dato;
      this.personajes = this.personajes.filter(personaje => personaje.saga.id == this.id);
    });
  }

  verDetalles(id:string){
    this.router.navigate(['personaje-detalle',id]);
  }

}

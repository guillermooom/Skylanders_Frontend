import { Component, OnInit } from '@angular/core';
import { Saga } from '../../Entidades/Saga';
import { Router } from '@angular/router';
import { ListadoSagaService } from '../../Services/listado-saga.service';

@Component({
  selector: 'app-listado-saga',
  standalone: true,
  imports: [],
  templateUrl: './listado-saga.component.html',
  styleUrl: './listado-saga.component.css'
})
export class ListadoSagaComponent implements OnInit{

   
  sagas:Saga[];

  constructor(private sagaService:ListadoSagaService,private router:Router){}

  ngOnInit(): void {
    this.obtenerSagas();
  }

  private obtenerSagas(){
    this.sagaService.obtenerSagas().subscribe(dato =>{
      console.log(dato);
      this.sagas = dato;
    });
  }

  verDetalles(id:number){
    this.router.navigate(['sagas',id]);
  }
}

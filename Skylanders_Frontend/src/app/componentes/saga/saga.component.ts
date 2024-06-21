import { Component, OnInit } from '@angular/core';
import { Saga } from '../../Entidades/Saga';
import { SagaService } from '../../Services/saga.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saga',
  standalone: true,
  imports: [],
  templateUrl: './saga.component.html',
  styleUrl: './saga.component.css'
})
export class SagaComponent implements OnInit{
  
  sagas:Saga[];

  constructor(private sagaService:SagaService,private router:Router){}

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
    this.router.navigate(['saga-detalle',id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { Saga } from '../../Entidades/Saga';
import { SagaService } from '../../Services/saga.service';

@Component({
  selector: 'app-saga',
  standalone: true,
  imports: [],
  templateUrl: './saga.component.html',
  styleUrl: './saga.component.css'
})
export class SagaComponent implements OnInit{
  
  sagas:Saga[];

  constructor(private sagaService:SagaService){}

  ngOnInit(): void {
    this.obtenerSagas();
  }

  private obtenerSagas(){
    this.sagaService.obtenerSagas().subscribe(dato =>{
      console.log(dato);
      this.sagas = dato;
    });
  }

}

import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { ListadoSagaComponent } from "../../componentes/listado-saga/listado-saga.component";
import { GiantsComponent } from "../../componentes/sagas/giants/giants.component";

@Component({
  selector: 'app-saga',
  standalone: true,
  imports: [HeaderComponent, SagaComponent, ListadoSagaComponent, GiantsComponent],
  templateUrl: './saga.component.html',
  styleUrl: './saga.component.css'
})
export class SagaComponent {

}

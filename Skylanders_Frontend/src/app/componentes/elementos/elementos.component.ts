import { Component, OnInit } from '@angular/core';
import { Elementos } from '../../Entidades/Elementos';
import { ElementoService } from '../../Services/elemento.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-elementos',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './elementos.component.html',
  styleUrl: './elementos.component.css'
})
export class ElementosComponent implements OnInit{
  
  elementos:Elementos[];

  constructor(private elementoService:ElementoService){}

  ngOnInit(): void {
    this.obtenerElementos();
  }

  private obtenerElementos(){
    this.elementoService.obtenerElementos().subscribe(dato =>{
      this.elementos = dato;
    });
  }

}

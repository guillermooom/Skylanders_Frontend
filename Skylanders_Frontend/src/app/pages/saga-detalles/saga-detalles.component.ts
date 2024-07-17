import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GiantsComponent } from "../../componentes/sagas/giants/giants.component";
import { HeaderComponent } from "../../componentes/header/header.component";
import { NotFoundComponent } from "../not-found/not-found.component";

@Component({
  selector: 'app-saga-detalles',
  standalone: true,
  imports: [GiantsComponent, HeaderComponent, NotFoundComponent],
  templateUrl: './saga-detalles.component.html',
  styleUrl: './saga-detalles.component.css'
})
export class SagaDetallesComponent implements OnInit {

  saga: string | null;

  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(dato => {
      this.saga = dato.get('id');
    });
  }

  volverSagas(){
    this.router.navigate(['sagas']);
  }

  irError(){
    this.router.navigate(['not_found']);
  }

}

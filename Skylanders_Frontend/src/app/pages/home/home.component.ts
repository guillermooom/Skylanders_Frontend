import { Component } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { PresentacionComponent } from "../../componentes/presentacion/presentacion.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PresentacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

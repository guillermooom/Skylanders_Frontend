import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { PresentacionComponent } from "../../componentes/presentacion/presentacion.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, PresentacionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }

}

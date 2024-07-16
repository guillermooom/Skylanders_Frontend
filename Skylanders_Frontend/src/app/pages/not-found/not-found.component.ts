import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../componentes/header/header.component";
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit{
  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Elementos } from '../Entidades/Elementos';

@Injectable({
  providedIn: 'root'
})
export class ElementoService {

  private baseURL = "http://localhost:8080/elemento";

  constructor(private httpClient : HttpClient) { }

  obtenerElementos():Observable<Elementos[]>{
    return this.httpClient.get<Elementos[]>(`${this.baseURL}/all`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../Entidades/Personajes';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private baseURL = "http://localhost:8080/personaje";

  constructor(private httpClient : HttpClient) { }

 obtenerPersonajes():Observable<Personajes[]>{
   return this.httpClient.get<Personajes[]>(`${this.baseURL}/all`)
 }

}

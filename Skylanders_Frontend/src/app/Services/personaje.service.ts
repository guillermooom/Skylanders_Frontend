import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Personajes } from '../Entidades/Personajes';
import { Elementos } from '../Entidades/Elementos';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  private baseURL = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

 obtenerPersonajes():Observable<Personajes[]>{
   return this.httpClient.get<Personajes[]>(`${this.baseURL}/personaje/all`)
 }

  obtenerPersonajesId(id:string):Observable<Personajes>{
    return this.httpClient.get<Personajes>(`${this.baseURL}/personaje/all/${id}`)
  }

  obtenerElementos():Observable<Elementos[]>{
    return this.httpClient.get<Elementos[]>(`${this.baseURL}/elemento/all`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saga } from '../Entidades/Saga';
import { Observable } from 'rxjs';
import { Personajes } from '../Entidades/Personajes';

@Injectable({
  providedIn: 'root'
})
export class ListadoSagaService {
  
  private baseURL = "http://localhost:8080";

  constructor(private httpClient : HttpClient) { }

 obtenerSagas():Observable<Saga[]>{
   return this.httpClient.get<Saga[]>(`${this.baseURL}/saga/all`)
 }

 obtenerSagasId(id:number):Observable<Saga>{
   return this.httpClient.get<Saga>(`${this.baseURL}/saga/all/${id}`)
 }

 obtenerPersonajes():Observable<Personajes[]>{
   return this.httpClient.get<Personajes[]>(`${this.baseURL}/personaje/all`)
 }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Saga } from '../Entidades/Saga';

@Injectable({
  providedIn: 'root'
})
export class SagaService {

  private baseURL = "http://localhost:8080/saga";

   constructor(private httpClient : HttpClient) { }

  obtenerSagas():Observable<Saga[]>{
    return this.httpClient.get<Saga[]>(`${this.baseURL}/all`)
  }
}

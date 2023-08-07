import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_HOST } from '../config/api.config';
import { Tickets } from '../models/chamado'; 

@Injectable({
  providedIn: 'root'
})
export class ChamadoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Tickets>{
    return this.http.get<Tickets>(`${API_HOST.baseUrl}/chamados/${id}`);
  }

  findAll(): Observable<Tickets[]> {
    return this.http.get<Tickets[]>(`${API_HOST.baseUrl}/chamados`);
  }

  create(chamado: Tickets): Observable<Tickets> {
    return this.http.post<Tickets>(`${API_HOST.baseUrl}/chamados`, chamado)
  }

  update(chamado: Tickets): Observable<Tickets> {
    return this.http.put<Tickets>(`${API_HOST.baseUrl}/chamados/${chamado.id}`, chamado)
  }

}
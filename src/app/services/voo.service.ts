import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { API_HOST } from '../config/api.config';
import { Voo } from '../models/voo';

@Injectable({
  providedIn: 'root'
})
export class VooService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Voo>{
    return this.http.get<Voo>(`${API_HOST.baseUrl}/voo/${id}`);
  }

  findAll(): Observable<Voo[]> {
    return this.http.get<Voo[]>(`${API_HOST.baseUrl}/voo`);
  }

  create(chamado: Voo): Observable<Voo> {
    return this.http.post<Voo>(`${API_HOST.baseUrl}/voo`, chamado)
  }

  update(chamado: Voo): Observable<Voo> {
    return this.http.put<Voo>(`${API_HOST.baseUrl}/voo/${chamado.id}`, chamado)
  }

}
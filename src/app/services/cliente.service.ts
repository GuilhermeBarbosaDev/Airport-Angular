import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_HOST } from '../config/api.config';
import { Observable, map } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  finById(id: any): Observable<Cliente> {
    return this.http.get<Cliente>(`${API_HOST.baseUrl}/clientes/${id}`);
  }

  findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_HOST.baseUrl}/clientes`);
  }

  create(Cliente: Cliente): Observable<Cliente> {
    return this.http.post(`${API_HOST.baseUrl}/clientes`, Cliente).pipe(
      map((response: Object) => response as Cliente));
  }

  update(Cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${API_HOST.baseUrl}/clientes/${Cliente.id}`, Cliente);
  }

  delete(id: any): Observable<Cliente>{
    return this.http.delete<Cliente>(`${API_HOST.baseUrl}/clientes/${id}`);
  }

}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_HOST } from '../config/api.config';
import { Observable, map } from 'rxjs';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class TecnicoService {

  constructor(private http: HttpClient) { }

  finById(id: any): Observable<Tecnico> {
    return this.http.get<Tecnico>(`${API_HOST.baseUrl}/tecnicos/${id}`);
  }

  findAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(`${API_HOST.baseUrl}/tecnicos`);
  }

  create(tecnico: Tecnico): Observable<Tecnico> {
    return this.http.post(`${API_HOST.baseUrl}/tecnicos`, tecnico).pipe(
      map((response: Object) => response as Tecnico));
  }

  update(tecnico: Tecnico): Observable<Tecnico>{
    return this.http.put<Tecnico>(`${API_HOST.baseUrl}/tecnicos/${tecnico.id}`, tecnico);
  }

  delete(id: any): Observable<Tecnico>{
    return this.http.delete<Tecnico>(`${API_HOST.baseUrl}/tecnicos/${id}`);
  }

}
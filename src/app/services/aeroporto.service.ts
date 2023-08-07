import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_HOST } from '../config/api.config';
import { Observable, map } from 'rxjs';
import { Aeroporto } from '../models/aeroporto';

@Injectable({
  providedIn: 'root'
})
export class AeroportoService {

  constructor(private http: HttpClient) { }

  finById(id: any): Observable<Aeroporto> {
    return this.http.get<Aeroporto>(`${API_HOST.baseUrl}/aeroportos/${id}`);
  }

  findAll(): Observable<Aeroporto[]> {
    return this.http.get<Aeroporto[]>(`${API_HOST.baseUrl}/aeroportos`);
  }

  create(Aeroporto: Aeroporto): Observable<Aeroporto> {
    return this.http.post(`${API_HOST.baseUrl}/aeroportos`, Aeroporto).pipe(
      map((response: Object) => response as Aeroporto));
  }
  

  update(Aeroporto: Aeroporto): Observable<Aeroporto>{
    return this.http.put<Aeroporto>(`${API_HOST.baseUrl}/aeroportos/${Aeroporto.id}`, Aeroporto);
  }

  delete(id: any): Observable<Aeroporto>{
    return this.http.delete<Aeroporto>(`${API_HOST.baseUrl}/aeroportos/${id}`);
  }

}
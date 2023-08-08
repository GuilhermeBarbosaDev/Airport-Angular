import { Injectable } from '@angular/core';
import { ClassAir } from '../models/classAir';
import { Observable } from 'rxjs';
import { API_HOST } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassAirService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<ClassAir[]> {
    return this.http.get<ClassAir[]>(`${API_HOST.baseUrl}/class`);
  }

  findById(id: any): Observable<ClassAir> {
    return this.http.get<ClassAir>(`${API_HOST.baseUrl}/class/${id}`);
  }

  update(classAir: ClassAir): Observable<ClassAir>{
    return this.http.put<ClassAir>(`${API_HOST.baseUrl}/class/${classAir.id}`, classAir);
  }
}

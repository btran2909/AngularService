import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService<T> {
  constructor(private http: HttpClient, @Inject('API_BASE_URL') private baseUrl: string) { }

  getAll(url: string): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}`);
  }

  getById(url: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${url}/${id}`);
  }

  create(url: string, entity: T): Observable<T> {
    return this.http.post<T>(url, entity);
  }

  update(url: string, id: number, entity: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${url}/${id}`, entity);
  }

  delete(url: string, id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${url}/${id}`);
  }
}

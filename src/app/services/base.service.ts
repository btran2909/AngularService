import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseService<T> {
  constructor(
    private http: HttpClient,
    @Inject('API_BASE_URL') private baseUrl: string
  ) {}

  get<R>(url: string): Observable<R> {
    return this.http.get<R>(`${this.baseUrl}/${url}`);
  }

  getById<R>(url: string, id: number): Observable<R> {
    return this.http.get<R>(`${this.baseUrl}/${url}/${id}`);
  }

  create<R>(url: string, payload: T): Observable<R> {
    return this.http.post<R>(url, payload);
  }

  update<R>(url: string, payload: T): Observable<R> {
    return this.http.put<R>(`${this.baseUrl}/${url}`, payload);
  }

  delete<R>(url: string, id: number): Observable<R> {
    return this.http.delete<R>(`${this.baseUrl}/${url}/${id}`);
  }
}

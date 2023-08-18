import { Event } from './../models/Event';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  baseURL = 'https://localhost:7179/api/eventos';

constructor (private http: HttpClient) { }

  public getEventos(): Observable<Event[]> {
    return this.http.get<Event[]>(this.baseURL).pipe(take(1));
  }

  public getEventosByTema(tema: string): Observable<Event[]>{
    return this.http.get<Event[]>(`${this.baseURL}/${tema}/tema`).pipe(take(1));
  }

  public getEventoById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseURL}/${id}`).pipe(take(1));
  }

  public post(event: Event): Observable<Event> {
    return this.http.post<Event>(this.baseURL, event).pipe(take(1));
  }

  public put(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.baseURL})/${event.id}`, event).pipe(take(1));
  }

  public deleteEvento(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}

import { Injectable } from '@angular/core';
import { Note, NoteDto } from '../core/models/note.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/constants';
import { NotExpr } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _http: HttpClient) {}

  create(note: NoteDto): Observable<Note> {
    note.created = note.updated = new Date();
    note.deleted = 0;
    return this._http.post(`${baseURL}/notes`, note) as Observable<Note>;
  }

  findAll(): Observable<Note[]> {
    return this._http.get(`${baseURL}/notes`) as Observable<Note[]>;
  }

  findDeleted(): Observable<Note[]> {
    return this._http.get(`${baseURL}/notes/deleted`) as Observable<Note[]>;
  }

  find(id: number): Observable<Note> {
    return this._http.get(`${baseURL}/notes/${id}`) as Observable<Note>;
  }

  update(id: number, note: NoteDto): Observable<Note> {
    note.updated = new Date();
    return this._http.put(`${baseURL}/notes/${id}`, note) as Observable<Note>;
  }

  remove(id: number): Observable<Note> {
    return this._http.delete(`${baseURL}/notes/${id}`) as Observable<Note>;
  }

  permaRemove(id: number): Observable<Note> {
    return this._http.delete(`${baseURL}/notes/deleted/${id}`) as Observable<Note>;
  }
}

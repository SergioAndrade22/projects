import { Injectable } from '@angular/core';
import { Category, CategoryDto } from '../components/core/models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) {}

  create(category: CategoryDto): Observable<Category> {
    return this._http.post(`${baseURL}/categories`, category) as Observable<Category>;
  }

  findAll(): Observable<Category[]> {
    return this._http.get(`${baseURL}/categories`) as Observable<Category[]>;
  }

  find(id: number): Observable<Category> {
    return this._http.get(`${baseURL}/categories/${id}`) as Observable<Category>;
  }

  update(id: number, category: CategoryDto): Observable<Category> {
    return this._http.put(`${baseURL}/categories/${id}`, category) as Observable<Category>;
  }

  remove(id: number): Observable<Category> {
    return this._http.delete(`${baseURL}/categories/${id}`) as Observable<Category>;
  }
}

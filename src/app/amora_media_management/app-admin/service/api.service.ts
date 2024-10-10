import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiUrl : string = 'http://127.0.0.1:8000/api/v1';

  QueryUsers():Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/users`);
  }

  QueryGuidelines():Observable<string[]>{
    return this.http.get<string[]>(`${this.apiUrl}/guidelines`);
  }
}

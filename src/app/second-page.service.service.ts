import { Injectable, Input } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondPageServiceService {
  private apiUrl = 'http://localhost:3000/lehkovi';
  constructor(private http:HttpClient) { }

  // getCars(): Observable<Car[]>{
  //   return this.http.get<Car>(this.apiUrl);
  // }
}

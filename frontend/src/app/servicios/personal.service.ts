import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  url:string = "http://localhost:8080/persona/traer";
  constructor( private http:HttpClient) { }

  obtenerDatos():Observable<any>
  {
    return this.http.get<any>(this.url);
  }
}

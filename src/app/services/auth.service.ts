import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NewUser } from '../models/new-user';
import { LoginUser } from '../models/login-user';
import { JwtDTO } from '../models/jwt-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = environment.authUrl;

  constructor(private httpClient : HttpClient) { }

  public newUs(newUser: NewUser): Observable<any>{
    return this.httpClient.post<any>(this.authUrl + 'new', newUser);
  }

  public login(loginUser: LoginUser): Observable<JwtDTO>{
    return this.httpClient.post<JwtDTO>(this.authUrl + 'login', loginUser);
  }
}

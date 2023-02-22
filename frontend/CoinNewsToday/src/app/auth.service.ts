import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  login(data: any): Observable<any> {
    
    return this.http.post(`${server}/connexion`, data);
  }

  register(data: any): Observable<any> {
    
    return this.http.post(`${server}/inscription`, data);
  }
}

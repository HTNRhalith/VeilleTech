import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : HttpClient) { }

  news(): Observable<any> {
    
    return this.http.get(`${server}/article_scan`);
  }

  homearticle(): Observable<any> {
    
    return this.http.get(`${server}/article`);
  }

}

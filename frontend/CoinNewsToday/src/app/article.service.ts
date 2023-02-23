import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/constants';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  token = sessionStorage.getItem('token');

  constructor(private http: HttpClient) {}

  postArticle(data: any): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    if (this.token !== null) {
      headers = headers.append('Authorization', this.token);
    }
    return this.http.post(`${server}/article/ajouter-livre`, data, {headers});
  }
}

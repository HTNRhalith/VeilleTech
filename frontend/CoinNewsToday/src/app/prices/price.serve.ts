import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { server } from 'src/constants';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor(private http : HttpClient) { }

  price(): Observable<any> {
    
    return this.http.get(`${server}/price`);
  }

  pricebyname(data:any): Observable<any> {
    
    return this.http.get(`${server}/price/name/${data}`);
  }

}

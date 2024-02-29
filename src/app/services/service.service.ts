import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiEmployes = 'https://m1p11mean-toky-anderson-node.up.railway.app/api/client/employes';
  private apiServices = 'https://m1p11mean-toky-anderson-node.up.railway.app/api/client/services';
  private apiCategories = 'https://m1p11mean-toky-anderson-node.up.railway.app/api/client/categories';


  
  constructor(private http: HttpClient){}

  getEmployes(): Observable<any> {
    return this.http.get<any>(this.apiEmployes);
  }

  getServices(): Observable<any> {
    return this.http.get<any>(this.apiServices);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(this.apiCategories);
  }



}

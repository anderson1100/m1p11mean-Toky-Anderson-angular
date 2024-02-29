import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  constructor(private http: HttpClient) { }

  baseUrl : string = "https://m1p11mean-toky-anderson-node.up.railway.app/";



  login(loginObject : object){
    let headers = new HttpHeaders({
      'content-Type': 'application/json',
    })
    let options = {
      headers: headers,
    };
    return this.http.post('employe/login', loginObject, options)
  }

  getEmploye(): Observable<any>{
    return this.http.get('employe/profil');
  }

  getHistoryRdv(): Observable<any>{
    return this.http.get('employe/rdv_history');
  }

  getCommission(): Observable<any>{
    return this.http.get('employe/total_commission_today');
  }

  getListRdv(): Observable<any>{
    return this.http.get('employe/list_rdv_today');
  }

  completeRdv(id : string): Observable<any>{
    return this.http.post(`employe/complete_rdv/${id}`,id);
  }

  updatePhoto(photo: string): Observable<any>{
    return this.http.post(`employe/updatePhotoEmploye/${photo}`,photo)
  }

}

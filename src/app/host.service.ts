import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  serviceHost = environment.serviceHost;

  user = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  postFunction(url:any, data:any): Observable<any> {
    return this.http.post(this.serviceHost + url, data);
  }
  login(url:any):Observable<any>{
    return this.http.get(this.serviceHost + url);
  }
  logout(url:any):Observable<any>{
    return this.http.get(this.serviceHost + url);
  }
}

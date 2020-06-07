import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HardwareDetailsService {

  constructor(private http:HttpClient) { }

  getHardwareDetails():Observable<any>{
    return this.http.get<any>('http://localhost:8080/');
 
  }
}

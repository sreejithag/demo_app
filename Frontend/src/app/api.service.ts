import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAlldata(){
    const endpoint = 'http://localhost:3000/api/v1/get/allinfo';
    return this.http.get(endpoint);
  }

  public getDetail(email:string){
    const endpoint = 'http://localhost:3000/api/v1/get/details?email='+email;
    return this.http.get(endpoint);
  }

  public userExists(email:string){
    const endpoint = 'http://localhost:3000/api/v1/get/exists?email='+email;
    return this.http.get(endpoint);
  }

  public add(data:any){
    const endpoint = 'http://localhost:3000/api/v1/add';
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(data);
    return this.http.post(endpoint, body, { headers });
  }

  
}

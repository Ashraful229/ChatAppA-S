import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl="http://localhost:8081/user";

  constructor(private httpClient:HttpClient) { }

  //getuser
  getUser(){
    return this.httpClient.get(this.baseUrl+"/getUser");
  }
}

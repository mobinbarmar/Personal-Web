import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  

  test(){
    return this.http.get(environment.API)
  }
}

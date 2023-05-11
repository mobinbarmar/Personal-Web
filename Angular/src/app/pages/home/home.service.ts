import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  postForm(body:any){
    console.log('mobin')
    return this.http.post(environment.API, body).subscribe((res) => {
      console.log(res)
    })
  }
}

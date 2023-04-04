import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseUrl= 'http://localhost/api/';
  constructor(
    private http : HttpClient
  ) { }

  get_student(){
    return this.http.get(this.baseUrl+'std_view.php');
  }
  post_std(data:any){
    return this.http.post(this.baseUrl+'std_add.php',data);
  }
  get_staff(){
    return this.http.get(this.baseUrl+'staff_view.php');
  }

}

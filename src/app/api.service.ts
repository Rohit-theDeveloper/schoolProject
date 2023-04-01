import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://localhost/smsapi/';
  constructor(
    private http:HttpClient
  ) { }

  get_book(){
    return this.http.get(this.baseurl+'bookdataget.php');
  }
  post_book(data:any){
    return this.http.post(this.baseurl + 'booksforminsert.php',data);
  }
}

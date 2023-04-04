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
  // library geting data from database
  get_library(){
    return this.http.get(this.baseurl+'libraryget.php');
  }
  post_library(data:any){
    return this.http.post(this.baseurl + 'libraryinsert.php',data);
  }
  //book transaction database api

  get_book_tran(){
    return this.http.get(this.baseurl+'booktransactionget.php');
  }
  post_book_tran(data:any){
    return this.http.post(this.baseurl + 'booktransactioninsert.php',data);
  }
  //application database api
  get_librnapplication(){
    return this.http.get(this.baseurl+'view_librnapplication.php');
  }
}

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
  get_fee(){
    return this.http.get(this.baseUrl+'fee_recp_view.php');
  }
  get_notice(){
    return this.http.get(this.baseUrl+"notification_view_tbl.php");
>>>>>>> 68e51ba871ac8f014ebe12d7df46d0c1dfd14c67
  }
}

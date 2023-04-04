import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost/smsapi/';
  constructor(
    private http:HttpClient
  ) { }

  get_book(){
    return this.http.get(this.baseUrl+'bookdataget.php');
  }
  post_book(data:any){
    return this.http.post(this.baseUrl + 'booksforminsert.php',data);
  }
  // library geting data from database
  get_library(){
    return this.http.get(this.baseUrl+'libraryget.php');
  }
  post_library(data:any){
    return this.http.post(this.baseUrl + 'libraryinsert.php',data);
  }
  //book transaction database api

  get_book_tran(){
    return this.http.get(this.baseUrl+'booktransactionget.php');
  }
  post_book_tran(data:any){
    return this.http.post(this.baseUrl + 'booktransactioninsert.php',data);
  }
  //application database api
  get_librnapplication(){
    return this.http.get(this.baseUrl+'view_librnapplication.php');
  }

  get_student(){
    return this.http.get(this.baseUrl+'std_view.php');
  }
  post_std(data:any){
    return this.http.post(this.baseUrl+'std_add.php',data);
  }
  get_staff(){
    return this.http.get(this.baseUrl+'staff_view.php');
  }

  get_fee(){
    return this.http.get(this.baseUrl+'fee_recp_view.php');
  }
  get_notice(){
    return this.http.get(this.baseUrl+"notification_view_tbl.php");
  }
}



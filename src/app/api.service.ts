import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost/api/';
  constructor(
    private http: HttpClient
  ) { }
  // book getting data from data bas
  get_book() {
    return this.http.get(this.baseUrl + 'bookdataget.php');
  }
  post_book(data: any) {
    return this.http.post(this.baseUrl + 'booksforminsert.php', data);
  }

  // endingg......

  // library geting data from database
  get_library() {
    return this.http.get(this.baseUrl + 'libraryget.php');
  }
  post_library(data: any) {
    return this.http.post(this.baseUrl + 'libraryinsert.php', data);
  }
  // endingg......

  //book transaction database api
  get_book_tran() {
    return this.http.get(this.baseUrl + 'booktransactionget.php');
  }
  post_book_tran(data: any) {
    return this.http.post(this.baseUrl + 'booktransactioninsert.php', data);
  }
  // endingg......

  //application database api
  get_librnapplication() {
    return this.http.get(this.baseUrl + 'view_librnapplication.php');
  }
  post_librnapplication(data: any) {
    return this.http.post(this.baseUrl + 'insert_librnapplication.php', data);
  }
  // endingg......

  //student getting database api
  get_student() {
    return this.http.get(this.baseUrl + 'std_view.php');
  }
  post_std(data: any) {
    return this.http.post(this.baseUrl + 'std_insert.php', data);
  }

  // endingg......

  get_staff() {
    return this.http.get(this.baseUrl + 'staff_view.php');
  }
  //student getting database api
  get_fee() {
    return this.http.get(this.baseUrl + 'fee_recp_view.php');
  }
  post_fee(data: any) {
    return this.http.post(this.baseUrl + 'fee_recp_insert.php', data);
  }

  // endingg......

  //  notice getting data from database
  get_notice() {
    return this.http.get(this.baseUrl + "notification_view_tbl.php");
  }
  // endingg......
  // class module function........
  get_class() {
    return this.http.get(this.baseUrl + 'class_view.php');
  }
  // end class module function....

  // subject module function......
  get_subject() {
    return this.http.get(this.baseUrl + 'subject_view.php');
  }
  // end subject module function...
  // slalary module function.....
  get_salary() {
    return this.http.get(this.baseUrl + 'salary_view.php');
  }
  // end salary maodule function....
}



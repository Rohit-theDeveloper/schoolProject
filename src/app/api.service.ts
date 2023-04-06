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
  get_single_book(bookid:any) {
    return this.http.get(this.baseUrl + 'bookdataget.php?bookid='+bookid);
  }
  post_book(data: any) {
    return this.http.post(this.baseUrl + 'booksforminsert.php', data);
  }
  put_book(data: any) {
    return this.http.put(this.baseUrl + 'update_books.php', data);
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
  get_single_student(sid:any){
    return this.http.get(this.baseUrl+'std_view.php?sid='+sid);
  }

  post_std(data: any) {
    return this.http.post(this.baseUrl + 'std_insert.php', data);
  }
  put_std(data:any){
    return this.http.put(this.baseUrl + 'std_update.php',data);
  }

  // endingg......


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
  post_notice(data:any){
    return this.http.post(this.baseUrl+'notification_insert_tbl.php',data)
  }
  // endingg......
  // class module function........
  get_class() {
    return this.http.get(this.baseUrl + 'class_view.php');
  }
  post_class(data:any){
    return this.http.post(this.baseUrl+'class_insert.php',data);
  }
  // end class module function....

  // subject module function......
  get_subject() {
    return this.http.get(this.baseUrl + 'subject_view.php');
  }
  post_subject(data:any){
    return this.http.post(this.baseUrl + 'subject_insert.php', data);
  }
  // end subject module function...

  // slalary module function.....
  get_salary() {
    return this.http.get(this.baseUrl + 'salary_view.php');
  }
  post_salary(data:any) {
    return this.http.post(this.baseUrl + 'salary_insert.php',data);
  }
  // end salary module function.

  // staff module function......
  
  get_staff() {
    return this.http.get(this.baseUrl + 'staff_view.php');
  }
  post_staff(data:any){
    return this.http.post(this.baseUrl + 'staff_insert.php',data);
  }
  get_single_staff(staffid:any){
    return this.http.get(this.baseUrl +'staff_view.php?staff_id='+ staffid);
   
  }
  put_staff(data:any){
      return this.http.put(this.baseUrl+'staff_update.php',data);
  }
  // end staff module function.....
  // teacher module function....
  get_teachers() {
    return this.http.get(this.baseUrl + 'teacher_view.php');
  }
  // end  theacher module.... 
  // expense module function.....
  get_expense() {
    return this.http.get(this.baseUrl + 'expense_view.php');
  }
  post_expense(data:any){
    return this.http.post(this.baseUrl + 'expense_insert.php',data);
  }
  // end expense module...
  
  //getting data from database start
  get_librarian() {
    return this.http.get(this.baseUrl + 'view_librarian.php');
  }
  post_librarian(data:any){
    return this.http.post(this.baseUrl + 'insert_librarian.php',data);
  }
  get_single_librarian(librnid:any) {
    return this.http.get(this.baseUrl + 'view_librarian.php?librnid='+librnid);
  }
  put_librarian(data: any) {
    return this.http.put(this.baseUrl + 'update_librarian.php', data);
  }
  //getting data from database end here



//applicatio data view
get_application() {
  return this.http.get(this.baseUrl + 'admin_application_view.php');
}
}
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
  get_fee(){
    return this.http.get(this.baseUrl+'fee_recp_view.php');
  }
  get_notice(){
    return this.http.get(this.baseUrl+"notification_view_tbl.php");
  }
}

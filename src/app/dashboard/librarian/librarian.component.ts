import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  showFiller = false;
  img_local_url ='http://localhost/upload/';
  img_url = this.img_local_url +'logo.png';
  login_details:any
  login_as:any 
  ngOnInit(): void {
    this.login_details=localStorage.getItem('token')
    this.login_as=JSON.parse(this.login_details)
    this.img_url =(this.login_as['user_img'])? this.img_local_url+this.login_as.user_img:this.img_local_url+'logo.png';

  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  showFiller = false;
  login_details:any
  login_as:any 
  ngOnInit(): void {
    this.login_details=localStorage.getItem('token')
    this.login_as=JSON.parse(this.login_details)
  }
}

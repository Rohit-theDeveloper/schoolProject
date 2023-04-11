import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {
  showFiller = false;
  login_details:any
  login_as:any 
  ngOnInit(): void {
    this.login_details=localStorage.getItem('token')
    this.login_as=JSON.parse(this.login_details)
  }
}

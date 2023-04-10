import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  showFiller = false;
  login_details:any
  login_as:any 
  ngOnInit(): void {
    this.login_details=localStorage.getItem('token')
    this.login_as=JSON.parse(this.login_details)
  }
}

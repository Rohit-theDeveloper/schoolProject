import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit{
  showFiller = false;
  
  login_details:any
  login_as:any 
  ngOnInit(): void {
    this.login_details=localStorage.getItem('token')
    this.login_as=JSON.parse(this.login_details)
  }
}

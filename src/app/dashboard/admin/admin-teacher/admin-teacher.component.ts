import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})

export class AdminTeacherComponent {
  displayedColumns: string[] = ['position', 't_id', 'name', 'class', 'joindate', 'salary', 'address', 'mobile', 'email', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  t_id: number;
  class: string;
  joindate:string;
  salary:number;
  address:string;
  mobile:number;
  email:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {position: 1, name: 'Rohit',  t_id:101, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 2, name: 'Adrash', t_id:102, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 3, name: 'Raj',    t_id:103, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 4, name: 'Alok',   t_id:104, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 5, name: 'Rahul',  t_id:105, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
]




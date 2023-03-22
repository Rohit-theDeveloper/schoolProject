import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})

export class AdminTeacherComponent {
  displayedColumns: string[] = ['position','t_id', 'name', 'class', 'joindate','salary','address','Mobile','email','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  t_id: number;
  class:number;
  action: string;
  joindate:string;
  salary:number;
  address:string;
  mobile:number;
  email:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Rohit', t_id: 101, class: 4, joindate: "23/march/2023", salary: 2000, address:"hjp", mobile:8294532722, email:"rohitsinghrathor237@gmail.com", action:"rk"},
  {position: 1, name: 'Rohit', t_id: 101, class: 4, joindate: "23/march/2023", salary: 2000, address:"hjp", mobile:8294532722, email:"rohitsinghrathor237@gmail.com", action:"rk"},
  {position: 1, name: 'Rohit', t_id: 101, class: 4, joindate: "23/march/2023", salary: 2000, address:"hjp", mobile:8294532722, email:"rohitsinghrathor237@gmail.com", action:"rk"},
  {position: 1, name: 'Rohit', t_id: 101, class: 4, joindate: "23/march/2023", salary: 2000, address:"hjp", mobile:8294532722, email:"rohitsinghrathor237@gmail.com", action:"rk"},
  {position: 1, name: 'Rohit', t_id: 101, class: 4, joindate: "23/march/2023", salary: 2000, address:"hjp", mobile:8294532722, email:"rohitsinghrathor237@gmail.com", action:"rk"},
];


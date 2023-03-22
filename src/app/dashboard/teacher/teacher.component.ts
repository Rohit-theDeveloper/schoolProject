import { Component } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
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


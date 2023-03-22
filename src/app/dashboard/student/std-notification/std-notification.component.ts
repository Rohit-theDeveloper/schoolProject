import { Component } from '@angular/core';

@Component({
  selector: 'app-std-notification',
  templateUrl: './std-notification.component.html',
  styleUrls: ['./std-notification.component.css']
})
export class StdNotificationComponent {
  displayedColumns: string[] = ['position', 's_id', 'name', 'f_name', 'm_name', 'class', 'address', 'mobile','dob', 'email', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  s_id: number;
  class: string;
  f_name:string;
  m_name:string;
  address:string;
  mobile:number;
  email:string;
  dob:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {position: 1, name: 'Rohit',  s_id:101, class:"four",  dob:'23/march/2023', f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 2, name: 'Adrash', s_id:102, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 3, name: 'Raj',    s_id:103, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 4, name: 'Alok',   s_id:104, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
  {position: 5, name: 'Rahul',  s_id:105, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
]




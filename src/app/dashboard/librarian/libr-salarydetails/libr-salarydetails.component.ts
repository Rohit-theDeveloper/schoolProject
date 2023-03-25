import { Component } from '@angular/core';

@Component({
  selector: 'app-libr-salarydetails',
  templateUrl: './libr-salarydetails.component.html',
  styleUrls: ['./libr-salarydetails.component.css']
})
export class LibrSalarydetailsComponent {
  displayedColumns: string[] = ['position', 's_id', 'name', 'f_name', 'm_name', 'class', 'address', 'mobile','dob', 'email'];
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
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {position: 1, name: 'Rohit',  s_id:101, class:"four",  dob:'23/march/2023', f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com",},
  {position: 2, name: 'Adrash', s_id:102, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com",},
  {position: 3, name: 'Raj',    s_id:103, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com",},
  {position: 4, name: 'Alok',   s_id:104, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com",},
  {position: 5, name: 'Rahul',  s_id:105, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com",},
]
import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent {
  displayedColumns: string[] = ['staff_position', 'staff_id', 'staff_name','staff_role','staff_joindate', 'staff_salary','staff_email','staff_address','staff_mobile', 'staff_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  staff_name: string;
  staff_position: number;
  staff_id: number;
  staff_role: string;
  staff_joindate:string;
  staff_email:string;
  staff_address:string;
  staff_mobile:number;
  staff_salary:string;
  staff_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {staff_position: 1, staff_id:101, staff_name: 'Nakul Singh', staff_role: 'sweeper',staff_joindate:'22/march/2022',staff_email: 'alokdhhjfi@gmail.com', staff_address:'hajipur', staff_mobile:98012554512, staff_salary:'20000', staff_action:'none' },
  {staff_position: 1, staff_id:101, staff_name: 'Nakul Singh', staff_role: 'sweeper',staff_joindate:'22/march/2022',staff_email: 'alokdhhjfi@gmail.com', staff_address:'hajipur', staff_mobile:98012554512, staff_salary:'20000', staff_action:'none' },
  {staff_position: 1, staff_id:101, staff_name: 'Nakul Singh', staff_role: 'sweeper',staff_joindate:'22/march/2022',staff_email: 'alokdhhjfi@gmail.com', staff_address:'hajipur', staff_mobile:98012554512, staff_salary:'20000', staff_action:'none' },
  {staff_position: 1, staff_id:101, staff_name: 'Nakul Singh', staff_role: 'sweeper',staff_joindate:'22/march/2022',staff_email: 'alokdhhjfi@gmail.com', staff_address:'hajipur', staff_mobile:98012554512, staff_salary:'20000', staff_action:'none' },
  {staff_position: 1, staff_id:101, staff_name: 'Nakul Singh', staff_role: 'sweeper',staff_joindate:'22/march/2022',staff_email: 'alokdhhjfi@gmail.com', staff_address:'hajipur', staff_mobile:98012554512, staff_salary:'20000', staff_action:'none' },
  
];
import { Component } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  displayedColumns: string[] = ['sal_position', 'sal_id', 'sal_date', 'sal_amount','sal_paid','sal_dues', 'sal_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  sal_date: string;
  sal_position: number;
  sal_id: number;
  sal_amount: number;
  sal_paid:number;
  sal_dues:number;
  sal_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
  {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
  {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
  {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
  {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
  
];
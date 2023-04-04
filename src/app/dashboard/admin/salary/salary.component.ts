import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{
  displayedColumns: string[] = ['Sno', 'salary_id', 'salary_date', 'salary_amount','salary_paid','salary_due', 'salary_action'];
  dataSource = new MatTableDataSource();
  constructor(
    private api:ApiService
  ){}
  ngOnInit(): void {
    this.api.get_salary().subscribe(
      (res:any)=>{
        // console.log(res.data);
        this.dataSource=res.data;
      }
    )
  }

}
// export interface PeriodicElement {
//   sal_date: string;
//   sal_position: number;
//   sal_id: number;
//   sal_amount: number;
//   sal_paid:number;
//   sal_dues:number;
//   sal_action:string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
//   {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
//   {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
//   {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
//   {sal_position: 1, sal_id:101, sal_date: '12/march/2022', sal_amount: 2000,sal_paid: 1500, sal_dues:500, sal_action:'none' },
  
// ];
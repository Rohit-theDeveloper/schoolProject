import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-libr-salarydetails',
  templateUrl: './libr-salarydetails.component.html',
  styleUrls: ['./libr-salarydetails.component.css']
})
export class LibrSalarydetailsComponent implements OnInit{
  displayedColumns: string[] = ['salary_position', 'salary_id', 'salary_amount','salary_paid','salary_dues', 'salary_date','salary_action'];
  dataSource = new MatTableDataSource();
  total_count: any;
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.api.get_salary().subscribe(
        (res:any)=>{
          // console.log(res.data);
          this.dataSource.data = res.data;
          this.total_count = res.data.length;
          
        }
      )
    }
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
// export interface PeriodicElement {
//   lib_name: string;
//   lib_position: number;
//   lib_id: number;
//   lib_salary:number;
//   lib_joindate: string;
//   lib_action:string;
//   lib_email:string;
//   lib_address:string;
//   lib_mobile:number;
//   lib_adhar:number;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {lib_position: 1, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 2, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 3, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 4, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
//   {lib_position: 5, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
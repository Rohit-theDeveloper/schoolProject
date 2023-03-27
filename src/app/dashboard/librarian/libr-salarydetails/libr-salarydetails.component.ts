import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-libr-salarydetails',
  templateUrl: './libr-salarydetails.component.html',
  styleUrls: ['./libr-salarydetails.component.css']
})
export class LibrSalarydetailsComponent {
  displayedColumns: string[] = ['lib_position', 'lib_id', 'lib_name', 'lib_joindate','lib_email','lib_address','lib_mobile','lib_salary','lib_adhar', 'lib_action'];
  dataSource = ELEMENT_DATA;
  
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }
}
export interface PeriodicElement {
  lib_name: string;
  lib_position: number;
  lib_id: number;
  lib_salary:number;
  lib_joindate: string;
  lib_action:string;
  lib_email:string;
  lib_address:string;
  lib_mobile:number;
  lib_adhar:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {lib_position: 1, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
  {lib_position: 2, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
  {lib_position: 3, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
  {lib_position: 4, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
  {lib_position: 5, lib_id:101, lib_name: 'Nakul Singh', lib_joindate: '12/march/2022', lib_salary:5000,lib_email: 'alokdhhjfi@gmail.com', lib_address:'hajipur', lib_mobile:98012554512, lib_adhar:12737474747, lib_action:'none' },
  
];
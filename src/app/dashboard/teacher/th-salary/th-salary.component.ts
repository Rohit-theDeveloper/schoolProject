import { Component } from '@angular/core';

@Component({
  selector: 'app-th-salary',
  templateUrl: './th-salary.component.html',
  styleUrls: ['./th-salary.component.css']
})
export class ThSalaryComponent {
  displayedColumns: string[] = ['position', 'sdate', 'samount', 'spaid','sdues'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  position: number;
  sdate: number;
  samount: number;
  spaid: number;
  sdues: number;

  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, sdate:2, samount:10000, spaid:1000, sdues:200},
  {position: 1, sdate:2, samount:10000, spaid:1000, sdues:200},
  {position: 1, sdate:2, samount:10000, spaid:1000, sdues:200},
  {position: 1, sdate:2, samount:10000, spaid:1000, sdues:200},
  
  
];
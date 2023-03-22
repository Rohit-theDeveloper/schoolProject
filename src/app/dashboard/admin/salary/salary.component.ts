import { Component } from '@angular/core';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent {
  displayedColumns: string[] = ['position', 'id', 'fname', 'mname','email','address','mobile','proffession', 'action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  fname: string;
  position: number;
  id: number;
  mname: string;
  action:string;
  email:string;
  address:string;
  mobile:number;
  proffession:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id:101, fname: 'Nakul Singh', mname: 'Rani Kumari',email: 'alokdhhjfi@gmail.com', address:'hajipur', mobile:98012554512, proffession:'farmer', action:'none' },
  {position: 1, id:101, fname: 'Nakul Singh', mname: 'Rani Kumari',email: 'alokdhhjfi@gmail.com', address:'hajipur', mobile:98012554512, proffession:'farmer', action:'none' },
  {position: 1, id:101, fname: 'Nakul Singh', mname: 'Rani Kumari',email: 'alokdhhjfi@gmail.com', address:'hajipur', mobile:98012554512, proffession:'farmer', action:'none' },
  {position: 1, id:101, fname: 'Nakul Singh', mname: 'Rani Kumari',email: 'alokdhhjfi@gmail.com', address:'hajipur', mobile:98012554512, proffession:'farmer', action:'none' },
  {position: 1, id:101, fname: 'Nakul Singh', mname: 'Rani Kumari',email: 'alokdhhjfi@gmail.com', address:'hajipur', mobile:98012554512, proffession:'farmer', action:'none' },
  
];
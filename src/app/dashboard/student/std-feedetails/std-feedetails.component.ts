import { Component } from '@angular/core';

@Component({
  selector: 'app-std-feedetails',
  templateUrl: './std-feedetails.component.html',
  styleUrls: ['./std-feedetails.component.css']
})
export class StdFeedetailsComponent {
  displayedColumns: string[] = ['position', 's_id', 'name', 'dues', 'paid','payingdate','month','action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  name: string;
  position: number;
  s_id: number;
  dues:number;
  paid:number;
  payingdate:string;
  month:string;
  action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {position: 1, name: 'Rohit',  s_id:101, dues:1000, paid:500, payingdate:"10/01/2023", month:"jan",action:"act"},
]




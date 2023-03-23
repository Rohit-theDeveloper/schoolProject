import { Component } from '@angular/core';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent {
  displayedColumns: string[] = ['fee_position', 'fee_id', 'fee_type', 'fee_amount','fee_paid','fee_dues', 'fee_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  fee_type: string;
  fee_position: number;
  fee_id: number;
  fee_amount: number;
  fee_paid:number;
  fee_dues:number;
  fee_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {fee_position: 1, fee_id:101, fee_type: 'class fee', fee_amount: 2000,fee_paid: 1500, fee_dues:500, fee_action:'none' },
  {fee_position: 1, fee_id:101, fee_type: 'class fee', fee_amount: 2000,fee_paid: 1500, fee_dues:500, fee_action:'none' },
  {fee_position: 1, fee_id:101, fee_type: 'class fee', fee_amount: 2000,fee_paid: 1500, fee_dues:500, fee_action:'none' },
  {fee_position: 1, fee_id:101, fee_type: 'class fee', fee_amount: 2000,fee_paid: 1500, fee_dues:500, fee_action:'none' },
  {fee_position: 1, fee_id:101, fee_type: 'class fee', fee_amount: 2000,fee_paid: 1500, fee_dues:500, fee_action:'none' },
  
];
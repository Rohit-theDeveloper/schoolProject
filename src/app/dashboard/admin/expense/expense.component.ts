import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  displayedColumns: string[] = ['exp_position', 'exp_id', 'exp_name', 'exp_date','exp_amount','exp_paid', 'exp_due','action'];
  dataSource = new MatTableDataSource();
  constructor(
    private api :ApiService
  ){}
  ngOnInit():void{
    this.api.get_expense().subscribe(
      (res:any) => {
        // console.log(res.data);
        this.dataSource.data = res.data;
        
      }
    )
  }    
}
// export interface PeriodicElement {
//   class_name: string;
//   class_position: number;
//   class_id: number;
//   class_fee: string;
//   class_action:string;
//   no_of_student:number;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
//   {class_position: 1, class_id:101, class_name: 'third', class_fee: '500', no_of_student:200, class_action:'none' },
//   {class_position: 1, class_id:101, class_name: 'third', class_fee: '500', no_of_student:200, class_action:'none' },
//   {class_position: 1, class_id:101, class_name: 'third', class_fee: '500', no_of_student:200, class_action:'none' },
//   {class_position: 1, class_id:101, class_name: 'third', class_fee: '500', no_of_student:200, class_action:'none' },
//   {class_position: 1, class_id:101, class_name: 'third', class_fee: '500', no_of_student:200, class_action:'none' },
  
// ];


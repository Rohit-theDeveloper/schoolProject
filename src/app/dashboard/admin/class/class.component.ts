import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit{
  displayedColumns: string[] = ['class_position', 'class_id', 'class_name', 'class_fee','no_of_student', 'class_action'];
  dataSource = new MatTableDataSource();
  constructor(
    private api:ApiService
  ){}
  ngOnInit(): void {
    this.api.get_class().subscribe(
      (res:any)=>{
        // console.log(res.data);
        this.dataSource.data= res.data;
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
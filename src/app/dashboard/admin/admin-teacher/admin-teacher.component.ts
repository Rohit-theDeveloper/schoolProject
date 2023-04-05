import { Component, OnInit } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})

export class AdminTeacherComponent implements OnInit{

  displayedColumns: string[] = ['position', 't_id', 't_name', 'class_id', 't_jndate', 't_salary', 't_address', 't_mob', 't_email', 'action'];
  // dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource();
  constructor(
    private api :ApiService
  ){}
  ngOnInit():void{
    this.api.get_teachers().subscribe(
      (res:any) => {
        console.log(res.data);
        this.dataSource.data = res.data;
        
      }
    )
  }    
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   t_id: number;
//   class: string;
//   joindate:string;
//   salary:number;
//   address:string;
//   mobile:number;
//   email:string;
//   action:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
 
//   {position: 1, name: 'Rohit',  t_id:101, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"pen"},
//   {position: 2, name: 'Adrash', t_id:102, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 3, name: 'Raj',    t_id:103, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 4, name: 'Alok',   t_id:104, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 5, name: 'Rahul',  t_id:105, class:"four",  joindate:"23/march/2023", salary:20000, address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
// ]




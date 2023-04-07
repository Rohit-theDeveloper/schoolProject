import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})

export class AdminTeacherComponent implements OnInit{

  displayedColumns: string[] = ['position', 't_id', 't_name', 'class_id', 't_jndate', 't_salary', 't_address', 't_mob', 't_email', 'action'];
  dataSource = new MatTableDataSource();
  constructor(
    private api :ApiService
  ){}
  ngOnInit(): void {
    this.api.get_teacher().subscribe(
      (res:any)=>{
        console.log(res);
      }
    )
  }
    
}






import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  } 
}



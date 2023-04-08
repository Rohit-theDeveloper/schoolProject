import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-admin-teacher',
  templateUrl: './admin-teacher.component.html',
  styleUrls: ['./admin-teacher.component.css']
})

export class AdminTeacherComponent implements OnInit,AfterViewChecked{

  displayedColumns: string[] = ['s.no', 't_id', 't_name', 'sub_name', 't_jndate', 't_salary','t_mob','t_img','action'];
  dataSource = new MatTableDataSource();
  $img_local_url ='http://localhost/upload/';
  $img_url = this.$img_local_url +'logo.png';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private api :ApiService
  ){}
  ngAfterViewChecked(): void {
    this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.api.get_teacher().subscribe(
      (res:any)=>{
        console.log(res);
        this.dataSource.data = res.data;
      }
    )
  } 
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}



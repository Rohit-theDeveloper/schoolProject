import { AfterViewInit, Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
    export class AdminStudentComponent implements OnInit, AfterViewInit  {
      displayedColumns: string[] = ['sn','std_id','std_name','std_fname','std_mname','std_email','std_mob','std_gender','std_photo'];
      dataSource = new MatTableDataSource();
     total_count:number = 0;
     @ViewChild(MatPaginator) paginator!: MatPaginator;
     @ViewChild(MatSort) sort!: MatSort;

        constructor(
          private api:ApiService
        ){}

    ngOnInit(): void {
      this.api.get_student().subscribe(
        (res:any)=> {
          // console.log(res.data);
          this.dataSource.data= res.data;
          this. total_count = res.data.length;
        }
      )
    }
    ngAfterViewInit() {
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
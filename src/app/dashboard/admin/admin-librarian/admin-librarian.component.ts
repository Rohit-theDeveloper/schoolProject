import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-librarian',
  templateUrl: './admin-librarian.component.html',
  styleUrls: ['./admin-librarian.component.css']
})
export class AdminLibrarianComponent implements OnInit {
  displayedColumns: string[] = ['librn_position', 'librn_id', 'librn_name', 'librn_jndate','librn_address','librn_gen','librn_salary','librn_email','librn_mob','librn_aadhar','librn_password', 'librn_action'];
  dataSource = new MatTableDataSource;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // total_count: any;
  constructor(private api:ApiService){}

  ngOnInit():void{
    this.api.get_librarian().subscribe(
      (res:any)=>{
        this.dataSource.data = res.data;
        // this.total_count = res.data.length;
        
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

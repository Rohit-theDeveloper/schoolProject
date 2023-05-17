import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-notification',
  templateUrl: './std-notification.component.html',
  styleUrls: ['./std-notification.component.css']
})
export class StdNotificationComponent implements OnInit{
  displayedColumns: string[] = ['sno', 'notice_type', 'notice_date','action'];
  dataSource = new MatTableDataSource;
   @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService){}
  ngOnInit():void{
    this.api.get_notice().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.dataSource.data = res.data;
        // this.total_count = res.data.length;
        
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




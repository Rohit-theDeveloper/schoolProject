import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-feedetails',
  templateUrl: './std-feedetails.component.html',
  styleUrls: ['./std-feedetails.component.css']
})
export class StdFeedetailsComponent implements OnInit{
  displayedColumns: string[] = ['sno', 'std_name', 'class_name', 'std_roll', 'class_fee','curr_due','fee_date'];
  dataSource = new MatTableDataSource();
  login_details:any
  uid:any
  id:any
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.login_details=localStorage.getItem('token')
      console.log(this.uid=JSON.parse(this.login_details))
      this.id=this.uid.type_id
      console.log(this.id)
      this.api.get_single_std_fee(this.id).subscribe(
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

import { Component, OnInit } from '@angular/core';
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
}

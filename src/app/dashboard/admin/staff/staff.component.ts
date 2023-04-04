import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit{
  displayedColumns: string[] = ['S No', 'staff_id', 'staff_name','role_id','staff_jndate','staff_email','staff_address','staff_mob', 'staff_action'];
  dataSource = new MatTableDataSource();
  constructor( 
    private api:ApiService
  ){}
  ngOnInit():void{
    this.api.get_staff().subscribe(
      (res:any)=>{
        // console.log(res.data);
        this.dataSource.data= res.data;
      }
    )

  } 
}

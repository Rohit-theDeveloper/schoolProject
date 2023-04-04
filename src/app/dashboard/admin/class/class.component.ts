import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit{

  displayedColumns: string[] = ['class_position', 'class_id', 'class_name', 'class_fee','no_of_student', 'class_action'];
  dataSource = new MatTableDataSource();
  constructor(
   private api:ApiService
  ){}
  ngOnInit(): void {
    this.api.get_class().subscribe(
      (res:any)=>{
        // console.log(res.data);
        this.dataSource.data= res.data;
      }
    )
  }
}


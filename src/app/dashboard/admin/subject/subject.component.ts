import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit{
  displayedColumns: string[] = ['Sno', 'sub_id', 'sub_name',  'sub_action'];
  dataSource = new MatTableDataSource();
  constructor(
    private api:ApiService
  ){}
  ngOnInit(): void {
    this.api.get_subject().subscribe(
      (res:any)=>{
        // console.log(res.data);
        this.dataSource=res.data;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-libr-application',
  templateUrl: './libr-application.component.html',
  styleUrls: ['./libr-application.component.css']
})
export class LibrApplicationComponent implements OnInit {
  displayedColumns: string[] = ['appli_position', 'appli_type','sender_type','sender_id','appli_date', 'appli_action'];
  dataSource = new MatTableDataSource;
  constructor(
private api:ApiService

  ){}

ngOnInit():void{
  this.api.get_librnapplication().subscribe((res:any)=>{
    this.dataSource.data = res.data
     }
   )
 }
}


// function ngOnInit() {
//   throw new Error('Function not implemented.');
// }
// // export interface PeriodicElement {
//   app_position: number;
//   app_date:string;
//   app_sender_name:string;
//   app_action:string;
// }
// const ELEMENT_DATA: PeriodicElement[] = [
 
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
//   {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
// ]


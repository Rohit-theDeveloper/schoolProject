import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-libr-notification',
  templateUrl: './libr-notification.component.html',
  styleUrls: ['./libr-notification.component.css']
})
export class LibrNotificationComponent implements OnInit {
  displayedColumns: string[] = ['sn', 'notice_msg', 'notice_date', 'notice_action'];
  dataSource = new MatTableDataSource();
  total_count: any;
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.api.get_notice().subscribe(
        (res:any)=>{
          // console.log(res.data);
          this.dataSource.data = res.data;
          this.total_count = res.data.length;
          
        }
      )
    }

}
// export interface PeriodicElement {
//   noti_type: string;
//   noti_position: number;
//   noti_date:string;
//   noti_action:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {noti_position: 1, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
//   {noti_position: 2, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
//   {noti_position: 3, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
//   {noti_position: 4, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
//   {noti_position: 5, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
  
// ];
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  displayedColumns: string[] = ['noti_position', 'noti_type', 'noti_date', 'noti_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  noti_type: string;
  noti_position: number;
  noti_date:string;
  noti_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {noti_position: 1, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
  {noti_position: 1, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
  {noti_position: 1, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
  {noti_position: 1, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
  {noti_position: 1, noti_type: 'leave notify', noti_date: '12/march/2020', noti_action:'none' },
  
];
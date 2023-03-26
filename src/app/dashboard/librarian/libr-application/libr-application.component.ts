import { Component } from '@angular/core';

@Component({
  selector: 'app-libr-application',
  templateUrl: './libr-application.component.html',
  styleUrls: ['./libr-application.component.css']
})
export class LibrApplicationComponent {
  displayedColumns: string[] = ['app_position', 'app_sender_name', 'app_date', 'app_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  app_position: number;
  app_date:string;
  app_sender_name:string;
  app_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
 
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
  {app_position: 1,  app_sender_name: 'Nakul Singh', app_date: '12/may/2022',  app_action:'none' },
]


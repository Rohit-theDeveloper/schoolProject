import { Component } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {
  displayedColumns: string[] = ['sub_position', 'sub_id', 'sub_name',  'sub_action'];
  dataSource = ELEMENT_DATA;
}
export interface PeriodicElement {
  sub_name: string;
  sub_position: number;
  sub_id: number;
  sub_action:string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {sub_position: 1, sub_id:101, sub_name: 'english', sub_action:'none' },
  {sub_position: 2, sub_id:102, sub_name: 'english', sub_action:'none' },
  {sub_position: 3, sub_id:103, sub_name: 'english', sub_action:'none' },
  {sub_position: 4, sub_id:104, sub_name: 'english', sub_action:'none' },
  {sub_position: 5, sub_id:105, sub_name: 'english', sub_action:'none' },
  
];
import { Component } from '@angular/core';

@Component({
  selector: 'app-libr-librarydetails',
  templateUrl: './libr-librarydetails.component.html',
  styleUrls: ['./libr-librarydetails.component.css']
})
export class LibrLibrarydetailsComponent {
  displayedColumns: string[] = ['library_position', 'library_id', 'library_name', 'library_action'];
  dataSource = ELEMENT_DATA;

}
export interface PeriodicElement {
  library_name: string;
  library_position: number;
  library_id: number;
  library_action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {library_position: 1, library_name: 'apna library',  library_id:101, library_action:"act"},
  {library_position: 2, library_name: 'study library', library_id:102, library_action:"act"},
  
]
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-libr-librarydetails',
  templateUrl: './libr-librarydetails.component.html',
  styleUrls: ['./libr-librarydetails.component.css']
})
export class LibrLibrarydetailsComponent implements OnInit {
  displayedColumns: string[] = ['library_position', 'library_id', 'library_name', 'library_action'];
  dataSource = new MatTableDataSource();
  total_count: any;
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.api.get_library().subscribe(
        (res:any)=>{
          // console.log(res.data);
          this.dataSource.data = res.data;
          this.total_count = res.data.length;
          
        }
      )
    }

}
// export interface PeriodicElement {
//   library_name: string;
//   library_position: number;
//   library_id: number;
//   library_action:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
 
//   {library_position: 1, library_name: 'apna library',  library_id:101, library_action:"act"},
//   {library_position: 2, library_name: 'study library', library_id:102, library_action:"act"},
  
// ]
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-librarydetails',
  templateUrl: './std-librarydetails.component.html',
  styleUrls: ['./std-librarydetails.component.css']
})
export class StdLibrarydetailsComponent {
  displayedColumns: string[] = ['sno','std_name', 'class_name', 'std_roll', 'book_name', 'issue_date', 'return_date','std_mob'];
  dataSource = new MatTableDataSource();
  constructor(private api : ApiService){}
  ngOnInit():void{
    this.api. get_book_tran().subscribe(
      (res:any)=>{
        console.log(res.data);
        this.dataSource.data = res.data;
        // this.total_count = res.data.length;
        
      }
    )
  }

}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   s_id: number;
//   class: string;
//   f_name:string;
//   m_name:string;
//   address:string;
//   mobile:number;
//   email:string;
//   dob:string;
//   action:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
 
//   {position: 1, name: 'Rohit',  s_id:101, class:"four",  dob:'23/march/2023', f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 2, name: 'Adrash', s_id:102, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 3, name: 'Raj',    s_id:103, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 4, name: 'Alok',   s_id:104, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
//   {position: 5, name: 'Rahul',  s_id:105, class:"four",  dob:"23/march/2023", f_name:'adarsh',m_name:'annu' ,address:"hjp", mobile:12345, email:"rks@gmail.com", action:"act"},
// ]






import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-feedetails',
  templateUrl: './std-feedetails.component.html',
  styleUrls: ['./std-feedetails.component.css']
})
export class StdFeedetailsComponent {
  displayedColumns: string[] = ['sno', 'std_name', 'class_name', 'std_roll', 'class_fee','fee_due','fee_date'];
  dataSource = new MatTableDataSource();
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.api.get_fee().subscribe(
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
//   dues:number;
//   paid:number;
//   payingdate:string;
//   month:string;
//   action:string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
 
//   {position: 1, name: 'Rohit',  s_id:101, dues:1000, paid:500, payingdate:"10/01/2023", month:"jan",action:"act"},
// ]




import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-std-dashboard',
  templateUrl: './std-dashboard.component.html',
  styleUrls: ['./std-dashboard.component.css']
})
export class StdDashboardComponent  implements OnInit{
  total_fee :number = 0
  total_appli : number=0
  login_details: any;
  uid: any;
  id: any;
  total_notice: number =0;
  constructor(
    private api: ApiService
){}
ngOnInit(): void {
  this.login_details=localStorage.getItem('token')
  console.log(this.uid=JSON.parse(this.login_details))
  this.id=this.uid.type_id
  console.log(this.id)
    this.api.get_single_std_fee(this.id).subscribe(
      (res:any)=>{
        this.total_fee = res.data.length
      }
    )
    this.api.get_single_application(this.id).subscribe(
      (res:any)=>{
        this.total_appli = res.data.length
        // console.log(this.total_appli)
      }
    )
    this.api.get_notice().subscribe(
      (res:any)=>{
        this.total_notice = res.data.length
        console.log(res.data.length)
      }
    )
}
}

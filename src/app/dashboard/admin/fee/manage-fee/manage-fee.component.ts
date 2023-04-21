import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-fee',
  templateUrl: './manage-fee.component.html',
  styleUrls: ['./manage-fee.component.css']
})
export class ManageFeeComponent implements OnInit{
  feedate :any
  class: any;
  due_amt: number=0;
constructor(
  private fb : FormBuilder,
  private api : ApiService,
  private router : Router,
  private datepipe : DatePipe,
){}
ngOnInit(): void {
  this.api.get_class().subscribe(
    (res:any)=>{
      // console.log(res.data)
      this.class=res.data
    }
  )
}
add_fee = this.fb.group({
fee_type:['',Validators.required],
fee_date:['',Validators.required],
fee_amount:['',Validators.required],
fee_paid:['',Validators.required],
fee_due:['',Validators.required],
std_id:['',Validators.required],
class_id:['',Validators.required]
})
onSave(){
  console.log(this.add_fee.value);
  this.api.post_fee(this.add_fee.value).subscribe(
    (res:any)=>{
      alert(res.message)
      this.add_fee.reset();
      this.router.navigate(["admin/fee"]);
      console.log(res)
    }
)
}
calcdue(){
  this.due_amt=Number(this.add_fee.get('fee_amount')?.value) - Number(this.add_fee.get('fee_paid')?.value)
  this.add_fee.get('fee_due')?.setValue(String(this.due_amt))

}
}

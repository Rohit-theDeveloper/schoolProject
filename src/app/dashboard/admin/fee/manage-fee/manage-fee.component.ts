import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-fee',
  templateUrl: './manage-fee.component.html',
  styleUrls: ['./manage-fee.component.css']
})
export class ManageFeeComponent {
constructor(
  private fb : FormBuilder,
  private api : ApiService,
  private router : Router
){}
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
}

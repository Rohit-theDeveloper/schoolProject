import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent {
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService
  ){}
  add_staff=this.fb.group({
    sub_id:['',Validators.required],
    sub_name:['',Validators.required],
    
  })
  Onreset(){
    this.add_staff.reset();
  }
  OnSave(){
    console.log(this.add_staff.value);
    this.api.post_staff(this.add_staff.value).subscribe(
      (res:any)=>{
        
        if(res.data!='null'){
          this.router.navigate(['/admin/subject'])
          alert("data inserted");
          this.add_staff.reset();
        }
        else{
          alert("data not inserted fill all the required fields......");
          this.add_staff.reset();
        }
        
        
      }
    )
}
}

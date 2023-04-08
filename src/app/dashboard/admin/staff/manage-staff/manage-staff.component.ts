import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-staff',
  templateUrl: './manage-staff.component.html',
  styleUrls: ['./manage-staff.component.css']
})
export class ManageStaffComponent implements OnInit{
  staffid: number=0;
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private url:ActivatedRoute,
    private api:ApiService
  ){}
  add_staff=this.fb.group({
    staff_id:[''],
    staff_name:['',Validators.required],
    staff_gender:['',Validators.required],
    staff_fname:['',Validators.required],
    staff_address:['',Validators.required],
    staff_mob:['',Validators.required],
    role_id:['',Validators.required],
    role_salary:[''],
    staff_aadhar:['',Validators.required],
    staff_dob:['',Validators.required],
    staff_email:['',Validators.required],
    staff_jndate:['',Validators.required],
  })
  ngOnInit(): void {
    this.staffid=this.url.snapshot.params['staff_id'];
  // console.log(this.staffid);
  if(this.staffid){
    this.api.get_single_staff(this.staffid).subscribe(
    (res:any)=>{
      console.log(res.data);
      this.add_staff.patchValue(res.data)
    }
  )
  }
  
  }
  OnReset(){
    this.add_staff.reset();
  }
  onupdate(){
    this.api.put_staff(this.add_staff.value).subscribe(
      (res:any)=>{
        console.log(res);
      }
    )
  }
  OnSave(){
    console.log(this.add_staff.value);
    this.api.post_staff(this.add_staff.value).subscribe(
      (res:any)=>{
        console.log(res);
       
      }
    )
}
}

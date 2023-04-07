import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent  {

  
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService,
    private url : ActivatedRoute
  ){}
  add_teacher=this.fb.group({
    t_id:[''],
    t_name:['',Validators.required],
    t_gender:['',Validators.required],
    t_fname:['',Validators.required],
    t_address:['',Validators.required],
    t_mob:['',Validators.required],
    class_id:['',Validators.required],
    t_aadhar:['',Validators.required],
    t_dob:['',Validators.required],
    t_email:['',Validators.required],
    t_jndate:['',Validators.required],
    t_salary:['',Validators.required],
    sub_id:['',Validators.required]
  }) 
  OnReset(){
    this.add_teacher.reset();
  }
  onSave(){
    // console.log(this.add_teacher.value);
    this.api.post_teachers(this.add_teacher.value).subscribe(
      (res:any)=>{
        this.add_teacher.reset();
        this.router.navigate(['/admin/admin-teacher']);
        console.log(res);
      }
    )
  }
 
    reset(){
      this.add_teacher.reset()
    }
}

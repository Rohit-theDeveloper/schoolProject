import { Component, } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import {  Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent {  
  actionheader : string ='Manage Student'
constructor(
  private fb : FormBuilder,
  private api : ApiService,
  private router : Router
  ){}
  add_std = this.fb.group({
    std_name:['',Validators.required],
    std_roll:['',Validators.required],
    std_fname:['',Validators.required],
    std_mname:['',Validators.required],
    std_dob:['',Validators.required],
    std_email:['',Validators.required],
    std_mob:['',Validators.required],
    std_aadhar:['',Validators.required],
    std_gender:['',Validators.required],
    std_bg:[''],
    std_nationality:['',Validators.required],
    std_identification:[''],
    std_address:['',Validators.required],
    std_password:[''],
    class_id:['',Validators.required],
    std_photo:['']
  })

      onSave(){
        // console.log(this.add_std.value);
        this.api.post_std(this.add_std.value).subscribe(
          (res:any)=>{
            this.add_std.reset();
            this.router.navigate(["../admin-student"]);
            console.log(res)
          }
          
  )
  
 }


  reset_form(){
    this.add_std.reset();
  }
  


}

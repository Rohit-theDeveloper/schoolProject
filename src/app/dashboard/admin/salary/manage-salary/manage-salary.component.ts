import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-salary',
  templateUrl: './manage-salary.component.html',
  styleUrls: ['./manage-salary.component.css']
})
export class ManageSalaryComponent {
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService
  ){}
  add_salary=this.fb.group({
    salary_date:['',Validators.required],
    salary_amount:['',Validators.required],
    salary_paid:['',Validators.required],
    salary_due:['',Validators.required],
    emp_type:['',Validators.required],
    emp_id:['',Validators.required],
    
  })
  OnReset(){
    this.add_salary.reset();
  }
  OnSave(){
    console.log(this.add_salary.value);
    this.api.post_salary(this.add_salary.value).subscribe(
      (res:any)=>{
        console.log(res);
        // if(res.data!='null'){
        //   this.router.navigate(['/admin/salary'])
        //   // alert("data inserted");
        //   this.add_salary.reset();
        // }
        // else{
        //   alert("data not inserted fill all the required fields......");
        //   this.add_salary.reset();
        // }
        
        
      }
    )
}
}
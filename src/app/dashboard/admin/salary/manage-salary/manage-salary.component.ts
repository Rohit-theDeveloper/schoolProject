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
  employee:any
  duesamount:any
  paidsalary :any
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
    salary_rcv:['',Validators.required],
    emp_type:['',Validators.required],
    emp_id:['',Validators.required],
    type_id:['',Validators.required]
    
  })
  OnReset(){
    this.add_salary.reset();
  }
  OnSave(){
    console.log(this.add_salary.value);
    this.api.post_salary(this.add_salary.value).subscribe(
      (res:any)=>{
        alert(res.message);
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
onchnageemptype(event:any){
  this.api.get_employee().subscribe(
    (res:any)=>{
      this.employee = res.data
    }
  )

}
onchnagename(event:any){
  console.log(event)
  this.api.get_employee_by_id(event).subscribe(
    (res:any)=>{
      // console.log(res.data.salary_amount)
      this.add_salary.get('salary_amount')?.setValue(res.data.salary_amount)
      // console.log(res.data.type_id)
      this.add_salary.get('type_id')?.setValue(res.data.type_id)
      // console.log(res.data.salary_paid)
      this.add_salary.get('salary_paid')?.setValue(res.data.salary_paid)
      this.add_salary.get('salary_due')?.setValue(res.data.salary_due)
      this.paidsalary=this.add_salary.get('salary_paid')?.value
      this.duesamount=this.add_salary.get('salary_due')?.value
    }
  )
}
oncalcamount($event:any){
  this.add_salary.get("salary_due")?.setValue(String(this.duesamount - Number(this.add_salary.get('salary_rcv')?.value)))
  this.add_salary.get("salary_paid")?.setValue(String(this.paidsalary  + Number(this.add_salary.get('salary_rcv')?.value)))
  // this.duesamount = (Number(this.add_salary.get('salary_due')?.value) -  Number(this.add_salary.get('salary_rcv')?.value))
  // this.add_salary.get('salary_due')?.setValue(this.duesamount)
}
}
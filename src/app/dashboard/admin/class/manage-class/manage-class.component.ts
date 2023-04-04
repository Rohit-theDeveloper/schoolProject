import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-class',
  templateUrl: './manage-class.component.html',
  styleUrls: ['./manage-class.component.css']
})
export class ManageClassComponent {
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService
  ){}
  add_class=this.fb.group({
    class_name:['',Validators.required],
    class_fee:['',Validators.required]
  })
  OnAdd(){
    console.log(this.add_class.value);
    this.api.post_class(this.add_class.value).subscribe(
      (res:any)=>{
        this.router.navigate(['../class'])
        alert("data inserted");
        this.add_class.reset();
      }
    )
   
  }
  // ngOnInit(): void {
    
  // }

}

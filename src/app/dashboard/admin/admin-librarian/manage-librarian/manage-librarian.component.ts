import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-librarian',
  templateUrl: './manage-librarian.component.html',
  styleUrls: ['./manage-librarian.component.css']
})
export class ManageLibrarianComponent implements OnInit{
librnid :number=0;
  constructor(
    private api:ApiService,
    private fb:FormBuilder,
    private route:Router
    ){}
    ngOnInit(): void {
        
    }

  librarianform = this.fb.group({
    librn_id : [''],
    librn_name: [''],
    librn_address:[''],
    librn_gen:[''],
    librn_salary:[''],
    librn_mob:[''],
    librn_aadhar:[''],
    librn_email:[''],
    librn_jndate:[''],
    librn_password:['']
  })
  onsave(){
    // console.log(this.librarianform.value);
    this.api.post_librarian(this.librarianform.value).subscribe(
      (res:any)=>{
        this.librarianform.reset();
        // this.router.navigate(['/libr-books']);
      }
    )
  }
  updatelibrarian(){
  this.api.put_librarian(this.librarianform.value).subscribe((res:any)=>{
    console.log(res.message);
    // this.librarianform.reset()
  })
  }
  
    reset(){
      this.librarianform.reset()
    }
}

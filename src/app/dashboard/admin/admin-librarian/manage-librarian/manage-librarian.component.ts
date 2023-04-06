import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-librarian',
  templateUrl: './manage-librarian.component.html',
  styleUrls: ['./manage-librarian.component.css']
})
export class ManageLibrarianComponent implements OnInit{
librnid:number = 0
constructor(
  private api:ApiService,
  private fb:FormBuilder,
  private router:Router,
  private url:ActivatedRoute
){}
    ngOnInit(): void {
      this.librnid = this.url.snapshot.params['id'] ; 
     if(this.librnid){
      this.api.get_single_librarian(this.librnid).subscribe((res:any)=>{
        this.librarianform.patchValue(res.data)
      })
     }
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
    this.api.post_librarian(this.librarianform.value).subscribe(
      (res:any)=>{
        this.librarianform.reset();
        // console.log(res.data)
        // this.router.navigate(['/libr-books']);
      }
    )
  }
  updatelibrarian(){
  this.api.put_librarian(this.librarianform.value).subscribe((res:any)=>{
    console.log(res.message);
    this.librarianform.reset()
  })
  }
  
    reset(){
      this.librarianform.reset()
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-librarian',
  templateUrl: './manage-librarian.component.html',
  styleUrls: ['./manage-librarian.component.css']
})
export class ManageLibrarianComponent implements OnInit{
librnid:number = 0
hide = true;
img_local_url ='http://localhost/upload/';
img_url:any = this.img_local_url+'logo.png';
selected_img:any;
librarianform!:FormGroup;
constructor(
  private api:ApiService,
  private fb:FormBuilder,
  private router:Router,
  private url:ActivatedRoute
){}
    ngOnInit(): void {
      this.librnid = this.url.snapshot.params['id'] ; 
     if(this.librnid){
      this.api.get_single_librarian(this.librnid).subscribe(
        (res:any)=>{
        this.librarianform.patchValue(res.data)
        this.img_url =(res.data['librn_img'])? this.img_local_url+res.data['librn_img']:this.img_local_url+'logo.png';
        console.log(res.data)
      }
      )
     }

  this. librarianform = this.fb.group({
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
}
  onsave(){
    // alert("Add");
    // console.log(this.add_std.get('std_name')?.value)
    const formData = new FormData();
    formData.append('librn_name',this.librarianform.get('librn_name')?.value)
    formData.append('librn_address',this.librarianform.get('librn_address')?.value)
    formData.append('librn_gen',this.librarianform.get('librn_gen')?.value)
    formData.append('librn_salary',this.librarianform.get('librn_salary')?.value)
    formData.append('librn_mob',this.librarianform.get('librn_mob')?.value)
    formData.append('librn_addhar',this.librarianform.get('librn_addhar')?.value)
    formData.append('librn_email',this.librarianform.get('librn_email')?.value)
    formData.append('librn_jndater',this.librarianform.get('librn_jndater')?.value)
    formData.append('librn_password',this.librarianform.get('librn_password')?.value)
    formData.append('photo',this.selected_img)
   

    this.api.post_librarian(formData).subscribe(
      (res:any)=>{
        // this.librarianform.reset();
        // console.log(res.data)
        this.router.navigate(['admin/admin-librarian']);
        alert('Data Inserted Successfully')
        console.log(res);
      }
    )
  }

onImgChng(file:any){
 if(file[0].length===0){
  return
 }
 this.selected_img = file[0];
  let reader = new FileReader();
  reader.onload = () =>{
    this.img_url = reader.result;
  }
  reader.readAsDataURL(file[0]);
}

  updatelibrarian(){
  this.api.put_librarian(this.librarianform.value).subscribe((res:any)=>{
    console.log(res.message);
    this.librarianform.reset()
    this.router.navigate(['admin/admin-librarian']);
    alert('Data Updated Successfully')
  })
  }
  
    reset(){
      this.librarianform.reset()
    }
}
function onImgChng(file: any, any: any) {
  throw new Error('Function not implemented.');
}


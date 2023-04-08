import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.css']
})
export class ManageTeacherComponent  implements OnInit{
 
   hide=true; 
  img_local_url ='http://localhost/upload/';
  img_url:any = this.img_local_url+'logo.png';
  selected_img:any;
  add_teacher!:FormGroup;
  tid: number =0;

  
  constructor(
    private fb:FormBuilder,
    private router:Router,
    private api:ApiService,
    private url : ActivatedRoute
  ){}
  ngOnInit(): void {
    this.tid = this.url.snapshot.params['id']
    if (this.tid) {
      // console.log(this.sid);
      this.api.get_single_student(this.tid).subscribe(
        (res: any) => {
          // console.log(res.data)
          this.add_teacher.patchValue(res.data);
          this.img_url =(res.data['t_img'])? this.img_local_url+res.data['std_img']:this.img_local_url+'logo.png';
          console.log(res.data)
        }
      )
    }
     this.add_teacher=this.fb.group({
      t_id:[''],
      t_name:['',Validators.required],
      t_gender:['',Validators.required],
      t_fname:['',Validators.required],
      t_address:['',Validators.required],
      t_mob:['',Validators.required],
      t_photo:['',],
      class_id:['',Validators.required],
      t_aadhar:['',Validators.required],
      t_dob:['',Validators.required],
      t_email:['',Validators.required],
      t_jndate:['',Validators.required],
      t_salary:['',Validators.required],
      sub_id:['',Validators.required]
    }) 
  }
 
  // OnReset(){
  //   this.add_teacher.reset();
  // }
  onSave(){
    // console.log(this.add_teacher.value);
    const formData = new FormData();
    formData.append('t_name',this.add_teacher.get('t_name')?.value)
    formData.append('t_gender',this.add_teacher.get('t_gender')?.value)
    formData.append('t_fname',this.add_teacher.get('t_fname')?.value)
    formData.append('t_address',this.add_teacher.get('t_address')?.value)
    formData.append('t_mob',this.add_teacher.get('t_mob')?.value)
    formData.append('class_id',this.add_teacher.get('class_id')?.value)
    formData.append('t_aadhar',this.add_teacher.get('t_aadhar')?.value)
    formData.append('t_dob',this.add_teacher.get('t_dob')?.value)
    formData.append('t_email',this.add_teacher.get('t_email')?.value)
    formData.append('t_jndate',this.add_teacher.get('t_jndate')?.value)
    formData.append('t_salary',this.add_teacher.get('t_salary')?.value)
    formData.append('sub_id',this.add_teacher.get('sub_id')?.value)
    formData.append('photo',this.selected_img)

    this.api.post_teachers(formData).subscribe(
      (res:any)=>{
        this.add_teacher.reset();
        this.router.navigate(['/admin/admin-teacher']);
        console.log(res);
      }
    )
  }
  onImgChng(file:any){
    if(file[0].length==0){
     return
    }
    this.selected_img = file[0];
    let reader = new FileReader();
    reader.onload = () =>{
      this.img_url = reader.result;
    }
      reader.readAsDataURL(file[0]);
    }
    updatestd() {
      // console.log("update");
      // console.log(this.add_std.value)
      this.api.put_std(this.add_teacher.value).subscribe(
        (res: any) => {
          this.router.navigate(['/admin/admin-student']);
          alert(res.message);
        }
      )
    }
 
    reset(){
      this.add_teacher.reset()
    }
}

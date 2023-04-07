import { Component, OnInit, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {
  sid: number = 0;
  hide = true;
  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private router: Router,
    private url: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sid = this.url.snapshot.params['id']
    if (this.sid) {
      // console.log(this.sid);
      this.api.get_single_student(this.sid).subscribe(
        (res: any) => {
          // console.log(res.data)
          this.add_std.patchValue(res.data);
        }
      )
    }


  }
  add_std = this.fb.group({
    std_id: [''],
    std_name: ['', Validators.required],
    std_roll: ['', Validators.required],
    std_fname: ['', Validators.required],
    std_mname: ['', Validators.required],
    std_dob: ['', Validators.required],
    std_email: ['', Validators.required],
    std_mob: ['', Validators.required],
    std_aadhar: ['', Validators.required],
    std_gender: ['', Validators.required],
    std_bg: [''],
    std_nationality: ['', Validators.required],
    std_identification: [''],
    std_address: ['', Validators.required],
    std_password: [''],
    class_id: ['', Validators.required],
    // std_photo:['']
  })

  onSave() {
    // console.log(this.add_std.value);
    this.api.post_std(this.add_std.value).subscribe(
      (res: any) => {
        this.router.navigate(['/admin/admin-student']);
        alert(res.message);
      }
    )

  }
  updatestd() {
    // console.log("update");
    // console.log(this.add_std.value)
    this.api.put_std(this.add_std.value).subscribe(
      (res: any) => {
        console.log(res.message)
        this.router.navigate(['/admin/admin-student']);
        alert(res.message);
      }
    )
  }

  reset_form() {
    this.add_std.reset();
  }



}

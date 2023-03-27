import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent  implements OnInit{
  studentform !:FormGroup
  actionheader : string ='Manage Student'
constructor(
  private fb : FormBuilder
){
  this.studentform = this.fb.group({
    std_id:[''],
    std_roll:[''],
    std_nation:[''],
    std_dob:[''],
    std_name:[''],
    std_adhar:[''],
    std_identi:[''],
    std_mob:[''],
    std_bg:[''],
    std_gen:[''],
    std_class:['']
  })
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  reset_form(){
    this.studentform.reset()
  }
  
}

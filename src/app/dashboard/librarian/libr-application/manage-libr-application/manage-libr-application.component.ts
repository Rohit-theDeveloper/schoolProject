import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-libr-application',
  templateUrl: './manage-libr-application.component.html',
  styleUrls: ['./manage-libr-application.component.css']
})
export class ManageLibrApplicationComponent {
 libr_application !:FormGroup
 constructor(private fb:FormBuilder){
  this.libr_application = this.fb.group({
    sub_id:[''],
    msg_id:['']
  })
 }
 reset_form(){
  this.libr_application.reset()
 }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-librarydetails',
  templateUrl: './manage-librarydetails.component.html',
  styleUrls: ['./manage-librarydetails.component.css']
})
export class ManageLibrarydetailsComponent {
// libraryform !:FormGroup
constructor(
  private fb : FormBuilder,
  private api :ApiService,
  private router:Router
){}

 libraryform = this.fb.group({
   library_id:[''],
   library_name:['']
 })

 onsave(){
  console.log(this.libraryform.value);
  this.api.post_library(this.libraryform.value).subscribe(
    (res:any)=>{
      this.libraryform.reset();
      // this.router.navigate(['../libr-books']);
      console.log(res)
    }
  )
}
reset(){
  this.libraryform.reset()
}
}
// ngOnInit(): void {
//   throw new Error('Method not implemented.');
// }
// reset_library_form(){
//   this.libraryform.reset()
// }

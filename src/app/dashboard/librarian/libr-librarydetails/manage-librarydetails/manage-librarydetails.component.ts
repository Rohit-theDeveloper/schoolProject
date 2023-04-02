import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-librarydetails',
  templateUrl: './manage-librarydetails.component.html',
  styleUrls: ['./manage-librarydetails.component.css']
})
export class ManageLibrarydetailsComponent {
libraryform !:FormGroup
constructor(private fb:FormBuilder ){
  this.libraryform = this.fb.group({
    library_id:[''],
    library_name:['']
  })
}
// ngOnInit(): void {
//   throw new Error('Method not implemented.');
// }
// reset_library_form(){
//   this.libraryform.reset()
// }
}
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-book-transaction',
  templateUrl: './manage-book-transaction.component.html',
  styleUrls: ['./manage-book-transaction.component.css']
})
export class ManageBookTransactionComponent {
  booktranform !:FormGroup
  actionheader : string ='Manage Student'
constructor(
  private fb : FormBuilder
){
  this.booktranform = this.fb.group({
    tran_id:[''],
    libr_id:[''],
    teach_id:[''],
    std_id:[''],
    book_id:[''],
    issue_date:[''],
    return_date:[''],
    late_fine:[''],
  })
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  reset_form(){
    this.booktranform.reset()
  }
  
}

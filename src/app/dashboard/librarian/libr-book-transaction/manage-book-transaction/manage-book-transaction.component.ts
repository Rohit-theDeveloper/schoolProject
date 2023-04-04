import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-book-transaction',
  templateUrl: './manage-book-transaction.component.html',
  styleUrls: ['./manage-book-transaction.component.css']
})
export class ManageBookTransactionComponent {
  actionheader : string ='Manage Student'
  constructor(
    private fb : FormBuilder,
    private api :ApiService,
    private router:Router
  ){}
//   constructor(
//   private fb : FormBuilder
// ){
  booktranform = this.fb.group({
    tran_id:[''],
    book_id:[''],
    reciever_id:[''],
    reciever_type:[''],
    issue_date:[''],
    return_date:[''],
  })
  onsave(){
    console.log(this.booktranform.value);
    this.api.post_book_tran(this.booktranform.value).subscribe(
      (res:any)=>{
        this.booktranform.reset();
        // this.router.navigate(['../libr-books']);
        console.log(res)
      }
    )
  }
  reset(){
    this.booktranform.reset()
  }
}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  // reset_form(){
  //   this.booktranform.reset()
  // }
  


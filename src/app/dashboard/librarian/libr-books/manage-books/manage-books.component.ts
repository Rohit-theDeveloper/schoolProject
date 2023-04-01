import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent {
  // bookform !:FormGroup
  actionheader : string ='Manage Book'
constructor(
  private fb : FormBuilder,
  private api :ApiService,
  private router:Router
){}
bookform = this.fb.group({
  // book_id:[''],
  book_price:[''],
  // std_nation:[''],
  book_name:[''],
  book_edition:[''],
  book_publi:[''],
  book_author:['']
})
onsave(){
  console.log(this.bookform.value);
  this.api.post_book(this.bookform.value).subscribe(
    (res:any)=>{
      this.bookform.reset();
      // this.router.navigate(['../libr-books']);
      console.log(res)
    }
  )
}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  reset(){
    this.bookform.reset()
  }
}

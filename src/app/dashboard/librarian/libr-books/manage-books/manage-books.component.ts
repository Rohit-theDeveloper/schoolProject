import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-books',
  templateUrl: './manage-books.component.html',
  styleUrls: ['./manage-books.component.css']
})
export class ManageBooksComponent {
  bookform !:FormGroup
  actionheader : string ='Manage Book'
constructor(
  private fb : FormBuilder
){
  this.bookform = this.fb.group({
    book_id:[''],
    book_price:[''],
    std_nation:[''],
    book_name:[''],
    book_edition:[''],
    book_public:[''],
    book_author:['']
  })
}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  reset_form(){
    this.bookform.reset()
  }
}

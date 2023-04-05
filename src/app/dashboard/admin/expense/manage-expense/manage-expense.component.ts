import { Component } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-manage-expense',
  templateUrl: './manage-expense.component.html',
  styleUrls: ['./manage-expense.component.css']
})
export class ManageExpenseComponent {
  actionheader : string ='Manage Expense'
  constructor(
    private fb : FormBuilder,
    private api :ApiService,
    private router:Router
  ){}
  expenseform = this.fb.group({
    // book_id:[''],
    exp_type:[''],
    exp_date:[''],
    exp_amount:[''],
    exp_paid:[''],
    exp_due:['']
  })
  onsave(){
    console.log(this.expenseform.value);
    this.api.post_book(this.expenseform.value).subscribe(
      (res:any)=>{
        this.expenseform.reset();
        // this.router.navigate(['../libr-books']);
        console.log(res)
      }
    )
  }
    // ngOnInit(): void {
    //   throw new Error('Method not implemented.');
    // }
  
    reset(){
      this.expenseform.reset()
    }
  }
  


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
  expense_id : number =0;
  constructor(
    private fb : FormBuilder,
    private api :ApiService,
    private router:Router
  ){}
  expenseform = this.fb.group({
    exp_name:[''],
    exp_date:[''],
    exp_amount:[''],
    exp_paid:[''],
    exp_due:['']
  })
  onSave(){
    console.log(this.expenseform.value);
    this.api.post_expense(this.expenseform.value).subscribe(
      (res:any)=>{
        this.expenseform.reset();
        this.router.navigate(['/admin/expense']);
        console.log(res);
      }
    )
  }
    reset(){
      this.expenseform.reset()
    }
  }
  


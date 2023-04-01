import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ApiService } from 'src/app/api.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-libr-books',
  templateUrl: './libr-books.component.html',
  styleUrls: ['./libr-books.component.css']
})
export class LibrBooksComponent implements OnInit {
  
  // @ViewChild(MatPaginator) paginator:MatPaginator;
  displayedColumns: string[] = ['book_position', 'book_id', 'book_name', 'book_author', 'book_publi', 'book_edition', 'book_price','book_action'];
  dataSource = new MatTableDataSource();
  constructor(private api : ApiService){}
    ngOnInit():void{
      this.api.get_book().subscribe(
        (res:any)=>{
          console.log(res.data);
          this.dataSource.data = res.data;
          
        }
      )
    }
    // ngAfterViewInit(){
    //   this.dataSource.paginator = this.paginator;
    // }
    // if(this.dataSource.paginator){
    //   this.dataSource.paginator.firstpage();
    // }
}

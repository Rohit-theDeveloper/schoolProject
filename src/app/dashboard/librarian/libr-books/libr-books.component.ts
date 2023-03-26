import { Component } from '@angular/core';

@Component({
  selector: 'app-libr-books',
  templateUrl: './libr-books.component.html',
  styleUrls: ['./libr-books.component.css']
})
export class LibrBooksComponent {
  displayedColumns: string[] = ['book_position', 'book_id', 'book_name', 'book_author', 'book_publi', 'book_edition', 'book_price','book_action'];
  dataSource = ELEMENT_DATA;

}

export interface PeriodicElement {
  book_name: string;
  book_position: number;
  book_id: number;
  book_author: string;
  book_publi:string;
  book_edition:string;
  book_price:number;
  book_action:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
 
  {book_position: 1, book_name: 'science',  book_id:101, book_author:"S.P singh",  book_publi:'Oxford', book_price:500, book_edition:'10th edition', book_action:"act"},
  {book_position: 2, book_name: 'math', book_id:102, book_author:"M.D chaudhary",  book_publi:"Oxford", book_price:500, book_edition:'10th edition', book_action:"act"},
  {book_position: 3, book_name: 'English',    book_id:103, book_author:"A singh",  book_publi:"Oxford", book_price:500, book_edition:'10th edition', book_action:"act"},
  {book_position: 4, book_name: 'S.S.T',   book_id:104, book_author:"A singh",  book_publi:"Oxford", book_price:500, book_edition:'10th edition', book_action:"act"},
  {book_position: 5, book_name: 'English Grammar',  book_id:105, book_author:"A singh",  book_publi:"Oxford", book_price:500, book_edition:'10th edition', book_action:"act"},
];
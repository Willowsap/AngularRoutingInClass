import { Component } from '@angular/core';
import { Book } from './book.model';
import { books } from './books';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  public books: Array<Book> = books;
}

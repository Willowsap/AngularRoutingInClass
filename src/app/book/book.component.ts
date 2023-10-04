import { Component } from '@angular/core';
import { Book } from '../library/book.model';
import { books } from '../library/books';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  public book?: Book;
  public books = books;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      (params: Params) => {
        this.book = books[params["bookId"]];
      }
    )
  }

}

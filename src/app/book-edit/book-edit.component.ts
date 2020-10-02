import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IBook} from '../ibook';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss']
})
export class BookEditComponent implements OnInit {
  formGroup: FormGroup;
  book: IBook = {
    id: 0,
    title: '',
    author: '',
    description: ''
  };

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  saveBook() {
    if (this.formGroup.valid) {
      this.book.title = this.formGroup.get('title').value;
      this.book.author = this.formGroup.get('author').value;
      this.book.description = this.formGroup.get('description').value;
      console.log(this.book);
      this.bookService.editBook(this.book.id, this.book).toPromise()
        .then(() => {
          this.router.navigate(['/books']);
        });

    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.formGroup = this.formBuilder.group(
        {
          title: ['', [Validators.required]],
          author: ['', [Validators.required]],
          description: ['', [Validators.required]]
        }
      );
      this.bookService.findById(id).subscribe(b => {
        console.log(b);
        this.book = b;
        this.formGroup.patchValue({
          title: b.title,
          author: b.author,
          description: b.description
        });
      });
    });
  }
}

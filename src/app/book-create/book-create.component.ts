import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  formGroup: FormGroup;
w
  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  createBook() {
    const data = {
      title: this.formGroup.get('title').value,
      author: this.formGroup.get('author').value,
      description: this.formGroup.get('description').value
    };
    if (this.formGroup.valid) {
      this.bookService.createBook(data).toPromise()
        .then(() => {
          this.router.navigate(['/books']);
        });

    }
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        author: ['', [Validators.required]],
        description: ['', [Validators.required]]
      }
    );
  }

}

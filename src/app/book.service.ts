import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IBook} from './ibook';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) {
  }

  findAllBooks(): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/books');
  }

  findById(id: number): Observable<any> {
    return this.httpClient.get<any>(API_URL + '/books/' + id);
  }

  createBook(book: IBook): Observable<any> {
    return this.httpClient.post<any>(API_URL + '/books', book);
  }

  editBook(id: number, book: IBook): Observable<any> {
    return this.httpClient.put<any>(API_URL + '/books/' + id, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.httpClient.delete<any>(API_URL + '/books/' + id);
  }
}

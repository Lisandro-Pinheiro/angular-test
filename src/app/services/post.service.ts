import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  getPostById(arg0: number) {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}

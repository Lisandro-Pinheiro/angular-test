
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'URL_DA_SUA_API'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) {}

  // Função para obter todos os posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  // Função para obter um post específico por ID
  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${id}`);
  }
}

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from '../models/post.model';

describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService],
    });

    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); 
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve posts from the API via GET', () => {
    const dummyPosts: Post[] = [
      { id: 1, title: 'Post 1', body: 'This is the body of Post 1', userId: 1 },
      { id: 2, title: 'Post 2', body: 'This is the body of Post 2', userId: 1 },
    ];

    service.getPosts();


    const request = httpMock.expectOne(`${service['apiUrl']}`);
    expect(request.request.method).toBe('GET');


    request.flush(dummyPosts);


  });

  it('should retrieve a post by ID from the API via GET', () => {
    const dummyPost: Post = { id: 1, title: 'Post 1', body: 'This is the body of Post 1', userId: 1 };


    service.getPostById(1);


    const request = httpMock.expectOne(`${service['apiUrl']}/1`);
    expect(request.request.method).toBe('GET');


    request.flush(dummyPost);

  });
});

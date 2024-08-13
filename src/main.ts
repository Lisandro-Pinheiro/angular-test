import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../src/app/app.component';
import { PostListComponent } from '../src/app/components/post-list/post-list.component';
import { PostDetailComponent } from '../src/app/components/post-detail/post-detail.component';
import { NavigationComponent } from '../src/app/components/navigation/navigation.component';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
}).catch(err => console.error(err));

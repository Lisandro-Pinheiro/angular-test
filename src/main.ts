// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Defina as rotas para o roteador
const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'post/:id', component: PostDetailComponent },
];

// Inicialize a aplicação
bootstrapApplication(AppComponent, {
  providers: [
    // Configure o RouterModule corretamente para uso com bootstrapApplication
    importProvidersFrom(RouterModule.forRoot(routes)),
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostListComponent,
    PostDetailComponent,
    NavigationComponent,
  ],
}).catch(err => console.error(err));

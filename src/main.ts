import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app/app-routing.module';

bootstrapApplication(AppComponent, {
  providers: [
    // Importando o módulo HttpClient
    HttpClientModule,
    // Configurando o roteamento usando as rotas exportadas de AppRoutingModule
    provideRouter(AppRoutingModule.routes),
  ],
}).catch(err => console.error(err));

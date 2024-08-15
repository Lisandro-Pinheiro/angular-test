import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from '../src/app/app.component';  // Import your standalone component
import { routes } from '../src/app/app.routes'; // Import your routes if you have them

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),  // Provide the router configuration if you have routes
    provideHttpClient()     // Provide HttpClient configuration
  ]
})
.catch(err => console.error(err));

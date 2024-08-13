import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule] // Importa o RouterModule se for usar diretivas como [routerLink]
})
export class AppComponent {
  title = 'my-app';
}

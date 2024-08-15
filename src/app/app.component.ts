import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component"; // Importar RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, NavigationComponent] // Adicione RouterOutlet aqui
})
export class AppComponent { 
  title = 'angular-test';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainPageComponent, HeaderComponent],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template:`
  <app-header></app-header>
  <app-main-page></app-main-page>
 `
})
export class AppComponent {
  title = 'angulartask';
}

import { Component } from '@angular/core';
import { LeftComponent } from "../left/left.component";
import { DashComponent } from "../dash/dash.component";
import { RightComponent } from "../right/right.component";
import { TableComponent } from "../table/table.component";
import { RouterOutlet } from '@angular/router';
import { BigComponent } from "../big/big.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [LeftComponent, DashComponent, RightComponent, TableComponent, RouterOutlet, BigComponent],
  // templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
  template:`
  <div class="main-page">
      <app-left></app-left>
     <app-big></app-big>
     <app-right></app-right>
  </div>
          `
})
export class MainPageComponent {

}

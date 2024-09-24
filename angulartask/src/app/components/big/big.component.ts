import { Component } from '@angular/core';
import { DashComponent } from "../dash/dash.component";
import { RightComponent } from "../right/right.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-big',
  standalone: true,
  imports: [DashComponent, RightComponent,RouterOutlet],
  styleUrl: './big.component.css',
  template:`
  <div class="dash-right">
    <router-outlet></router-outlet>
</div>`
})
export class BigComponent {

}

import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-left',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './left.component.html',
  styleUrl: './left.component.css'
})
export class LeftComponent {
  pressed:boolean=false;
  show():void
  {
    let dash=<HTMLElement> document.getElementById("navbar");
    let button=<HTMLElement>document.querySelector(".bar");
    let divs=document.querySelectorAll(".navbar1 > div")
    if(this.pressed)
    {
      button.classList.add("fa-bars")
      button.classList.remove("fa-xmark");
     
      this.pressed=false;
    }
    else
    {
      button.classList.remove("fa-bars")
      button.classList.add("fa-xmark");
      this.pressed=true;
    }
    divs.forEach(elme=>
    {
      elme.classList.toggle("s-d");
    }
    )
    dash.classList.toggle("show-list");
  }
}

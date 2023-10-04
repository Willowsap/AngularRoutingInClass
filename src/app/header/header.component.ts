import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pages = [
    {name: "Home", link: ""},
    {name: "About", link: "about"},
    {name: "Library", link: "library"},
  ]
}

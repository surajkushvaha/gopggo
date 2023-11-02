import { Component } from '@angular/core';
import { topmenu } from '../menu-list';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isNotLanding = false;
  isUserLogin = false;
  items: any[] | undefined;
  constructor(){

  }
  ngOnInit(){
    this.items = topmenu;
  }
}

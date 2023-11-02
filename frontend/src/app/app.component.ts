import { Component } from '@angular/core';

(window as any).fileServer = "http://localhost:3000/"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
}

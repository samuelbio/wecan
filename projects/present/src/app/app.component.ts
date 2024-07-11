import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'wc-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  style: ''
})
export class AppComponent {
  title = 'present';
}
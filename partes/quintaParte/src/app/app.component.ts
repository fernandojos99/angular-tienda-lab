import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // templateUrl: './app.component.html', para codigo pequenio
  template: '<router-outlet />  ',
  // styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda';
}

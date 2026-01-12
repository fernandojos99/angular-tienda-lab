import { Component } from '@angular/core';

//Existen 2 maneras de obtner la directiva routerLink
// import { RouterLinkWithHref } from '@angular/router';
import { RouterModule } from '@angular/router';  

@Component({
  selector: 'app-not-found',
  standalone: true,
  // imports: [CommonModule, RouterLinkWithHref],
  imports: [RouterModule],
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

}



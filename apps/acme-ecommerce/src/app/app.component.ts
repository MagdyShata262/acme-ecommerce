import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { NavComponent } from './nav/nav.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, NavComponent],
  selector: 'acme-ecommerce-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'acme-ecommerce';
}

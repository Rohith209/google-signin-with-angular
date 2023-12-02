import { Component } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userDetails: any;
  constructor(private router: Router) {
    this.userDetails = sessionStorage.getItem('UserProfileInfo');
    this.userDetails = JSON.parse(this.userDetails);
  }

  handleSignOut() {
    sessionStorage.removeItem('UserProfileInfo');
    this.router.navigate(['/login']);
  }
}



import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

declare var google: any;
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() {
    setTimeout(() => {
      google.accounts.id.initialize({
        client_id: "641429648730-64kcr9cbdv5se47gm2cfgk8abkhv7vma.apps.googleusercontent.com",
        callback: this.handleLogin
      });
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      //google.accounts.id.prompt();
    }, 1000);
  }

  handleLogin = (res: any) => {
    if (res) {
      let temp = (res.credential);
      sessionStorage.setItem("UserProfileInfo", JSON.stringify(jwtDecode(temp)));
      this.router.navigate(['/home']);
    }
  }
}




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private router: Router) {
    if (isDevMode()) {
      this.username = 'Wignesh';
      this.password = 'Vignesh@123';
    }
  }
  username: string = '';
  password: string = '';
  isLoginError: boolean = false;
  ngOnInit(): void {}

  login() {
    if (this.username == 'Wignesh' && this.password == 'Vignesh@123') {
      localStorage.setItem('user', JSON.stringify({ username: this.username }));
      this.router.navigateByUrl('/dashboard');
    } else {
      this.isLoginError = true;
    }
  }
  closeError() {
    this.isLoginError = false;
  }
}

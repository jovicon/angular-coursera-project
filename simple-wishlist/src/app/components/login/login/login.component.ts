import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public messageError: string;

  constructor(public authService: AuthService) {
    this.messageError = '';
  }

  ngOnInit(): void {}

  login(username: string, password: string): boolean {
    this.messageError = '';
    if (!this.authService.login(username, password)) {
      this.messageError = 'Incorrect username or password';
      setTimeout(() => {
        this.messageError = '';
      }, 3000);
    }

    return false;
  }

  logout(): boolean {
    this.authService.logout();
    return false;
  }
}

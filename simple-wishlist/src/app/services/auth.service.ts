import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(username: string, password: string): boolean {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }
}

import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mode = ['DARK', 'LIGHT'];
  darkMode = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  currentUser: User;

  updateUser(user: User) {
    this.currentUser = user;
  }

  changeMode() {
    this.darkMode = !this.darkMode;
    this.document.documentElement.classList.toggle('dark-mode');
  }
}

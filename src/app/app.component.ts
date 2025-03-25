import { Component } from '@angular/core';
import { DUMMY_USERS } from '../app/dummy-users';
import { User } from 'types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false,
})

export class AppComponent {
  user: User | undefined;
  users: User[] = DUMMY_USERS;
  selectedId: string | undefined;

  onSelectUser(id: string) {
    this.selectedId = id;
    this.user = this.users.find(user => user.id === id);
  }
}

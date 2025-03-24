import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../app/dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { User } from 'types/user';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
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

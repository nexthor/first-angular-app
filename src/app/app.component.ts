import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from '../app/dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  users = DUMMY_USERS;
  user_name = '';

  onSelectUser(id: string) {
    const user = this.users.find(user => user.id === id);
    this.user_name = user?.name || '';
  }
}

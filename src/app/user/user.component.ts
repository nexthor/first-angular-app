import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // signal its a container and notify the entire
  // application, and updates the content only on
  // places where were applied
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar);
  
  // get imagePath() {
  //   return '/assets/users/' + this.selectedUser().avatar;
  // }

  get randomIndex() {
    return Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    const index = this.randomIndex;
    this.selectedUser.set(DUMMY_USERS[index]);
    // this.selectedUser = DUMMY_USERS[index];
    console.log('clicked!', index);
  }
}

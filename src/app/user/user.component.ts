import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({ required: true }) avatar?: string;
  // @Input() name?: string;

  avatar = input.required<string>();
  name = input.required<string>();
  imagePath = computed(() => `/assets/users/${this.avatar()}`);
  
  // get imagePath() {
  //   return `/assets/users/${this.avatar}`;
  // }

  onSelectUser() {
  }
}


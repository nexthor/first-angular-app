import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) user?: {
    id: string;
    name: string;
    avatar: string;
  };

  @Output() select = new EventEmitter<string>();
  imagePath = computed(() => `/assets/users/${this.user?.avatar}`);

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}


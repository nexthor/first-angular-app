import {
  Component,
  computed,
  EventEmitter,
  Input,
  Output } from '@angular/core';
import { User } from 'types';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) user?: User;
  @Input({ required: true }) selected: boolean = false;

  @Output() select = new EventEmitter<string>();
  imagePath = computed(() => `/assets/users/${this.user?.avatar}`);

  onSelectUser() {
    this.select.emit(this.user?.id);
  }
}


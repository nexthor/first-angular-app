import { Component, computed, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({ required: true }) avatar?: string;
  @Input({ required: true }) name?: string;
  @Input({ required: true}) id?: string;

  @Output() select = new EventEmitter();

  get imagePath() {
    return `/assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}


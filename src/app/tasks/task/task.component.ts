import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'types/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task: Task | undefined;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask() {
    if (this.task) {
      this.complete.emit(this.task.id);
    }
  }
}

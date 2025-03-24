import { Component, EventEmitter, Output } from '@angular/core';
import { Task } from 'types/task';

@Component({
  selector: 'add-task',
  imports: [],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() task = new EventEmitter<Task>();

  onCancel() {
    this.cancel.emit();
  }

  onCreate() {
    
  }
}

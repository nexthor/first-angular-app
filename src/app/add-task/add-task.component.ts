import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from 'types/task';

@Component({
  selector: 'add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<Task>();
  title = '';
  summary = '';
  dueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onCreate() {
    const newTask: Task = {
      id: Math.random().toString(),
      title: this.title,
      summary: this.summary,
      dueDate: this.dueDate,
      userId: '1',
    }
    this.create.emit(newTask);
    this.title = '';
    this.summary = '';
    this.dueDate = '';
  }
}

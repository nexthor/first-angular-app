import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from 'app/tasks/tasks.service';
import { Task } from 'types/task';

@Component({
  selector: 'add-task',
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss'
})
export class AddTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Input({ required: true }) userId: string | undefined;
  title = '';
  summary = '';
  dueDate = '';
  // this is another way to inject a new class in a component
  private taskService = inject(TaskService);

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
    this.taskService.addTask(newTask, this.userId as string);
    this.title = '';
    this.summary = '';
    this.dueDate = '';
    this.cancel.emit();
  }
}

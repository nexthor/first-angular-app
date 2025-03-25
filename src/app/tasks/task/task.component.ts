import { Component, Input, inject } from '@angular/core';
import { Task } from 'types/task';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task: Task | undefined;
  private taskService = inject(TaskService);

  onCompleteTask() {
    if (this.task) {
      this.taskService.removeTask(this.task.id);
    }
  }
}

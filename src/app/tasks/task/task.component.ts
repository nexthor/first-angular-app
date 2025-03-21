import { Component, Input } from '@angular/core';
import { Task } from 'types/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task: Task | undefined;
}

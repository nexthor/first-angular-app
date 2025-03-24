import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { User } from 'types/user';
import { DUMMY_TASKS } from '../dummy-tasks';
import { AddTaskComponent } from 'app/add-task/add-task.component';
import { Task } from 'types/task';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, AddTaskComponent],
  standalone: true,
  providers: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({ required: true }) user?: User;
  @Input({ required: true }) addTask: boolean = false;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user?.id);
  }

  completeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onAddTask() {
    this.addTask = true;
  }

  onCancelAddTask() {
    this.addTask = false;
  }

  onCreateTask(newTask: Task) {
    const id = this.tasks.length + 1;
    newTask.id = id.toString();
    newTask.userId = this.user?.id || '';

    this.tasks.unshift(newTask);
    this.addTask = false;
  }
}

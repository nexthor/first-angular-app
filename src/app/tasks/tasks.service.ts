import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "app/dummy-tasks";
import { Task } from "types/task";

// this decorator makes this class injectable for Angular
@Injectable({ providedIn: 'root' })
export class TaskService {
    private tasks = DUMMY_TASKS;

    getTasks() {
        return this.tasks;
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId);
    }

    addTask(newTask: Task, userId: string) {
        const id = this.tasks.length + 1;
        newTask.id = id.toString();
        newTask.userId = userId || '';

        this.tasks.unshift(newTask);
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }
}
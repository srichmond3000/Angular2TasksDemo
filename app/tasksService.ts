import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable()

export class TasksService{
  getTasks(){
    return [new Task(1, "Task 1"), new Task(2, "Task 2"), new Task(3, "Task 3")];
  }
}
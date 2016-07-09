import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasksService';
import { TaskComponent } from './taskComponent';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'tasks-list',
  directives: [TaskComponent],
  providers: [TasksService],
  template: `
    <h3>Tasks</h3>
    
    <ul>
      <li *ngFor="let task of tasks">
        <task-detail [myTask]="task"></task-detail>
      </li>
    </ul>
  `
})

export class TasksListComponent implements OnInit {
  tasks;

  constructor(private tasksService: TasksService){
    
  }

  ngOnInit(){
    this.tasks = this.tasksService.getTasks();
  }
}
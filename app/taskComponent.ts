import { Component, Input } from '@angular/core';
import { Task } from './task';
import { CORE_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'task-detail',
  template: `
  <div *ngIf="myTask">
    <h4>{{myTask.title}}</h4>
    <p>Priority: {{myTask.priority}}</p>
  </div>
  `
})

export class TaskComponent {

  @Input()
  myTask: Task;
}
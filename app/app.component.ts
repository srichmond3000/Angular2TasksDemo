import { Component } from '@angular/core';
import { TasksListComponent } from './tasksListComponent';

@Component({
  selector: 'my-app',
  directives: [TasksListComponent],
  template: `
  <h1>My First Angular 2 App</h1>
  <tasks-list></tasks-list>
  `
})

export class AppComponent { }

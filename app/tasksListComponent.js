"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var tasksService_1 = require('./tasksService');
var taskComponent_1 = require('./taskComponent');
var TasksListComponent = (function () {
    function TasksListComponent(tasksService) {
        this.tasksService = tasksService;
    }
    TasksListComponent.prototype.ngOnInit = function () {
        this.tasks = this.tasksService.getTasks();
    };
    TasksListComponent = __decorate([
        core_1.Component({
            selector: 'tasks-list',
            directives: [taskComponent_1.TaskComponent],
            providers: [tasksService_1.TasksService],
            template: "\n    <h3>Tasks</h3>\n    \n    <ul>\n      <li *ngFor=\"let task of tasks\">\n        <task-detail [myTask]=\"task\"></task-detail>\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [tasksService_1.TasksService])
    ], TasksListComponent);
    return TasksListComponent;
}());
exports.TasksListComponent = TasksListComponent;
//# sourceMappingURL=tasksListComponent.js.map
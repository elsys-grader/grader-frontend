import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TasksService } from './tasks.service';
import { Task } from './task';

@Component({
    selector: 'grader-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    public dataSource: MatTableDataSource<Task>;

    constructor(private taskService: TasksService) { }

    ngOnInit() {
        this.taskService.getTasks().subscribe(
            (tasks) => {
                this.dataSource = new MatTableDataSource(tasks);
            }
        );
    }
}

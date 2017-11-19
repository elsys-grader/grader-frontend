import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'grader-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
    dataSource = new MatTableDataSource(TASKS_DATA);

    constructor() { }

    ngOnInit() {
    }
}

export interface Task {
    name: string;
    position: number;
}

const TASKS_DATA: Task[] = [
    {position: 1, name: 'Task 1'},
    {position: 2, name: 'Task 2'},
    {position: 3, name: 'Task 3'},
];

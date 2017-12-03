import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
    selector: 'grader-user-submissions',
    templateUrl: './user-submissions.component.html',
    styleUrls: ['./user-submissions.component.css']
})
export class UserSubmissionsComponent implements OnInit {
    rows = TASKS_DATA;
      columns = [
        { prop: 'name' },
      ];

    //dataSource = new MatTableDataSource(TASKS_DATA);

    constructor() { }

    ngOnInit() {
    }
}


export interface Task {
    name: string;
    position: number;
    grade: number;
    icon: string;
    details: string;
}

const TASKS_DATA: Task[] = [
    {position: 1, name: 'Compile', grade: 0.0, icon: 'done', details: 'compile faield'},
    {position: 2, name: 'Basic Test', grade: 500, icon: 'error', details: 'compile faield'},
    {position: 3, name: 'Advanced Test', grade: 500, icon: 'error', details: 'compile faield'},
];

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'grader-all-submissions',
  templateUrl: './all-submissions.component.html',
  styleUrls: ['./all-submissions.component.css']
})
export class AllSubmissionsComponent implements OnInit {
    dataSource = new MatTableDataSource(TASKS_DATA);

    constructor() { }

    ngOnInit() {
    }

}

export interface Task {
    name: string;
    position: number;
    grade: number;
}

const TASKS_DATA: Task[] = [
    {position: 1, name: 'User 1', grade: 500.0},
    {position: 2, name: 'User 2', grade: 500.},
];

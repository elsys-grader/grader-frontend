import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TasksService {
    private geneWeightsUrl = 'http://localhost:8000/tasks/';

    constructor(
        private http: HttpClient,
    ) { }


    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.geneWeightsUrl);
    }
}

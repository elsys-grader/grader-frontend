import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule, Routes } from '@angular/router';
import { AllSubmissionsComponent } from './all-submissions/all-submissions.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';

const appRoutes: Routes = [
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks/add', component: AddTaskComponent },
    { path: 'tasks/:id', component: AllSubmissionsComponent },
    { path: 'tasks/:id/:user', component: UserSubmissionsComponent },
    { path: '', redirectTo: '/tasks', pathMatch: 'full' },
];

@NgModule({
    declarations: [
        AppComponent,
        TasksComponent,
        AddTaskComponent,
        AllSubmissionsComponent,
        UserSubmissionsComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        BrowserAnimationsModule
    ],
        providers: [],
        bootstrap: [AppComponent]
})
export class AppModule { }

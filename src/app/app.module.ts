import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { RouterModule, Routes } from '@angular/router';
import { AllSubmissionsComponent } from './all-submissions/all-submissions.component';
import { UserSubmissionsComponent } from './user-submissions/user-submissions.component';
import { TasksService } from './tasks/tasks.service';

import { HttpClientModule } from '@angular/common/http';

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
        UserSubmissionsComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        MatInputModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        MatExpansionModule,
        BrowserAnimationsModule,
        NgxDatatableModule,
        HttpClientModule
    ],
    providers: [TasksService],
        bootstrap: [AppComponent]
})
export class AppModule { }

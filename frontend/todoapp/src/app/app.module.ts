import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from '../app/components/task/task.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import {MatCardModule} from '@angular/material/card';
import { TodolistComponent } from './components/todolist/todolist.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import {MatDialogModule} from '@angular/material/dialog';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSelectModule} from '@angular/material/select';
import { NewTaskComponent } from './components/new-task/new-task.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TodolistComponent,
    TaskDialogComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
